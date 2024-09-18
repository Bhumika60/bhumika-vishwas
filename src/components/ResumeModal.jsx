import React from 'react';
import { Transition } from '@headlessui/react';
import resumePDF from '../assets/icons/BhumikaVishwas_FrontendDeveloper_Resume.pdf';

const ResumeModal = ({ isOpen, onRequestClose }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg w-full max-w-4xl p-6 relative">
          <button
            onClick={onRequestClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <iframe
            src={resumePDF}
            title="Resume"
            className="w-full h-[85vh] border-0" // Adjust height to fit the screen
          />
        </div>
      </div>
    </Transition>
  );
};

export default ResumeModal;
