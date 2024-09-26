import React, { ReactNode } from 'react';

const ButtonPrimary = ({
  children,
  addClass = '', // Default value for optional addClass prop
  onClick,
  type = 'button',
  disabled = false,
}: {
  children: ReactNode;
  addClass?: string;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`py-2 px-8 sm:py-3 sm:px-10 lg:py-4 lg:px-16 text-sm sm:text-base lg:text-lg text-white font-semibold rounded-lg custom-btn-shadow custom-btn-bg-color transition-all outline-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${addClass}`} // Using template literals for conditional class names
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
