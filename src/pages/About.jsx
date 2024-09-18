import React, { useState } from 'react';
import CertificateModal from '../components/CertificateModal';
import { education, skills } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ResumeModal from '../components/ResumeModal';
import CTA from '../components/CTA';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };


  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Bhumika
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-400'>
        <p>
          Aspiring Frontend Developer with an MCA degree, honing skills through hands-on projects and creating intuitive, innovative user interfaces.
        </p>
        <div className='my-3 flex gap-4'>
          <button
            onClick={openResumeModal}
            className='btn'
          >
            View My Resume
          </button>
        </div>
        <ResumeModal
          isOpen={isResumeModalOpen}
          onRequestClose={closeResumeModal}
        />
      </div>

      {/* Certification Section */}
      <div className="py-10">
        <h3 className="subhead-text tracking-[.8px]">Certification</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-400'>
          <p>
            As a Meta Certified Frontend Developer, I have demonstrated expertise in modern frontend technologies, including React, JavaScript, and responsive design principles. This certification underscores my ability to build dynamic, user-centric web applications with a focus on performance, accessibility, and maintainability. I am committed to continuous learning and staying updated with the latest advancements in web development, ensuring that I deliver high-quality, scalable, and efficient solutions for today's digital landscape.
          </p>
        </div>

        {/* Button to open the certificate modal */}
        <div className='my-5'>
          <button
            onClick={openModal}
            className='btn'
          >
            View Certificate
          </button>
        </div>

        {/* CertificateModal Component */}
        <CertificateModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text tracking-[.8px]">Skill Highlights</h3>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 mx-auto' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Academic Background Section */}
      <div className="py-10">
        <h3 className="subhead-text tracking-[.8px]">Academic Background</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-400'>
          <p>
            Throughout my academic journey, I consistently excelled in high school and higher secondary, earning top ranks and scholarships. In my Bachelor's, I developed strong programming skills and won competitions, while my Master's in Computer Applications further advanced my expertise, especially in frontend development through multiple projects.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((education, index) => (
              <VerticalTimelineElement
                key={education.company_name}
                date={education.date}
                iconStyle={{ background: education.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={education.icon}
                      alt={education.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: "linear-gradient(to right, #2d3748, #928bf9, #2d3748)",
                  color: "#e5e7eb",
                  borderBottom: "4px solid #928bf9",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #2d3748" }}
              >
                <div>
                  <h3 className='text-white text-xl font-poppins font-semibold'>
                    {education.title}
                  </h3>
                  <p
                    className='text-gray-300 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {education.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {education.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className='text-gray-300 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
}

export default About;