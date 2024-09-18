import { Link } from "react-router-dom";
import githubIcon from '../assets/icons/github.svg';  
import linkedinIcon from '../assets/icons/linkedin.svg'; 

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>

      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
        <Link to='/contact' className='btn text-white py-2 px-6 rounded-md transition-colors'>
          Contact
        </Link>

        <div className='flex space-x-4'>
          <a href='https://github.com/Bhumika60' target='_blank' rel='noopener noreferrer' className='bg-gradient-to-r from-gray-800 via-[#928bf9] p-2 rounded-full'>
            <img src={githubIcon} alt='GitHub' className='w-6 h-6' />
          </a>
          <a href='https://www.linkedin.com/in/bhumika-vishwas/' target='_blank' rel='noopener noreferrer' className='bg-gradient-to-r from-gray-800 via-[#928bf9] p-2 rounded-full'>
            <img src={linkedinIcon} alt='LinkedIn' className='w-6 h-6' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
