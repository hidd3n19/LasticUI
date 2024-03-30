// Modal.tsx
import React, { ReactNode } from 'react';
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25 ">
      <div className=" lg:h-[40%] md:h-[60%] lg:w-[40%] md:w-[60%] bg-[#ebf6f8] rounded-3xl shadow-2xl">
        
    <div className=' flex justify-end'>
      <button className='mr-6 mt-5' onClick={onClose}>
        <IoClose className="w-10 h-10" />
      </button>
    </div> 
       
        {children}
    
      </div>
    </div>
  );
};

export default Modal;