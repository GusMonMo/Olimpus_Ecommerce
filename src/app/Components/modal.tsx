"use client"
import React, { useEffect, useState } from "react";
import './CSS/modal.css';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;
  return (
    <div className='modalOverlay'>
      <div className={`modal ${!isOpen ? 'hidden' : ''}`}
        onAnimationEnd={handleAnimationEnd}>
        {children}
      </div>
    </div>
  );
};

export default Modal;