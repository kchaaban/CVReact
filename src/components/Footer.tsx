import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 px-4 sm:px-6 md:px-8 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Khaled Chaaban. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </footer>
  );
};

export default Footer;