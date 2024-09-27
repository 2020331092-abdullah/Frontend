import React, { ReactNode } from 'react';

interface ButtonOutlineProps {
  children: ReactNode;
  onClick?: () => void;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({ children, onClick }) => {
  return (
    <button
      className="btn-outline font-medium tracking-wide text-sm sm:text-base py-2 px-4 sm:px-6 rounded-full capitalize transition-all duration-300 ease-in-out hover:shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
