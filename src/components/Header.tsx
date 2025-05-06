import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github as GitHub } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-4 sm:px-6 md:px-8 shadow-md">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Alain, Khaled CHAABAN, PhD, Eng</h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-2">
              System Engineering | Optimization | AI | IoT | Robotics | Data Science | Smart Cities
            </h2>
            <p className="text-blue-100 max-w-2xl">
              Expert in system engineering and integration, research and developpment, academic activities management and teaching.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-y-3 gap-x-8 text-sm">
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:chaaban.khaled@gmail.com" className="hover:text-blue-200 transition-colors">
              chaaban.khaled@gmail.com
            </a>
          </div>
          <div className="flex items-center">
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <span>(+966) 54-0946629</span>
          </div>
          <div className="flex items-center">
            <Linkedin size={16} className="mr-2" />
            <a href="https://www.linkedin.com/in/kchaaban/" className="hover:text-blue-200 transition-colors">
              linkedin.com/in/kchaaban
            </a>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Jeddah, Saudi Arabia</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
