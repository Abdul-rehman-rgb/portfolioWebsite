import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 text-center shadow-inner">
      <div className="flex justify-center items-center gap-1 text-gray-500 text-sm">
        <FaRegCopyright className="text-sm" />
        <span>2025 Abdul Rehman. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
