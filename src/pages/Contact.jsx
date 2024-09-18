import React, { Suspense, useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import Fox from "../models/Fox";
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Bhumika Vishwas",
        from_email: form.email,
        to_email: "bhumikavishwas6@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setForm({ name: "", email: "", message: "" })

      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({ name: "", email: "", message: "" })
      }, [4000]);

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    })
  }

  const handleFocus = (e) => {
    setCurrentAnimation('walk');
  }
  const handleBlur = (e) => {
    setCurrentAnimation('idle');
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>

{alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col p-6 bg-gradient-to-r from-gray-800 via-[#928bf9] to-gray-800 rounded-lg shadow-lg'>
        <h1 className='head-text text-gray-100'>
          Get in Touch
        </h1>
        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className='text-gray-300 font-semibold'>
            Name
            <input
              type="text"
              name="name"
              className='input'
              placeholder='Your name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-gray-300 font-semibold'>
            Email
            <input
              type="email"
              name="email"
              className='input'
              placeholder='Your email'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-gray-300 font-semibold'>
            Your Message
            <textarea
              type="text"
              name="message"
              className='textarea'
              rows={5}
              placeholder='Let me know, How can I help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.8} />
          <Suspense fallback={<Loader />}>
            <Fox fallback={<Loader />}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas> 
      </div>
    </section>
  )
}

export default Contact;

