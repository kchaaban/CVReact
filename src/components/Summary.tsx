import React from 'react';

const Summary: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-gray-200 pb-2">
          Professional Summary
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Associate professor with more than 18 years of expertise in conducting research activities, developing academic
          curricula, and participating in academic/industrial projects in computer engineering and computer
          science. Specialized in the design, development, and optimization of real-time and embedded software for
          computer systems applications, including robotics and transportation systems. Deep understanding
          of industry standards and best practices, ensuring projects meet the highest levels of quality and safety.
          Passionate advocate for continuous learning and improvement, with experience mentoring graduate Ph.D. and M.Sc.
          students, participating in ABET program accreditation, curriculum development, and quality assessment.
          Contributed to the broader academic community through publications and conference presentations.
        </p>
      </div>
    </section>
  );
};

export default Summary;