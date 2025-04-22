import React from 'react';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  location,
  period,
  description
}) => {
  return (
    <div className="mb-6 group">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
            {degree}
          </h3>
          <p className="text-lg text-gray-700">
            {institution} <span className="text-gray-500">| {location}</span>
          </p>
        </div>
        <p className="text-gray-500 mt-1 sm:mt-0">{period}</p>
      </div>
      {description && <p className="text-gray-700 mt-2">{description}</p>}
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-2">
          Education
        </h2>

        <EducationItem
          degree="Ph.D. in Information and Systems Technologies"
          institution="UTC/CNRS, Heudiasyc Lab"
          location="Compiègne, France"
          period="2002 - 2006"
          description="Thesis: 'A Distributed Real-Time Architecture For Advanced Vehicles' - Defended with highest honors"
        />

        <EducationItem
          degree="M.Sc. in Information and Systems Technologies"
          institution="Université de Technologie de Compiègne (UTC)"
          location="France"
          period="2001 - 2002"
          description="Thesis: 'Distributed real-time system for Multimedia applications'"
        />

        <EducationItem
          degree="Engineering Degree in Computer Systems and Telecommunications"
          institution="Faculty of Engineering, Lebanese University"
          location="Lebanon"
          period="1996 - 2001"
        />
      </div>
    </section>
  );
};

export default Education;