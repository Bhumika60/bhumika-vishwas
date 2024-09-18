import React from 'react';
import { Transition } from '@headlessui/react';
import certificatePDF from '../assets/icons/Meta_FrontendDeveloper_Certificate.pdf';

const CertificateModal = ({ isOpen, onRequestClose, certificateUrl }) => {
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
        <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative">
          <button
            onClick={onRequestClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold mb-4">Coursera Certificate</h2>
          <iframe
            src={certificatePDF}
            title="Certificate"
            className="w-full h-96 border-0"
          />
        </div>
      </div>
    </Transition>
  );
};

export default CertificateModal;
