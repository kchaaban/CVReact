import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Technical Expertise",
    skills: [
      "Embedded Systems Development",
      "Real-Time Operating Systems",
      "System Engineering & Architecture",
      "Quality Assurance & Standards",
      "Robotics & Control Systems",
      "Distributed Systems",
      "Network Programming",
      "Model-based Engineering",
      "Software Development"
    ]
  },
  {
    category: "Programming & Tools",
    skills: [
      "Python, C/C++, PHP, JavaScript",
      "Unix/Linux, MicroC-OSII, OSEK",
      "dSPACE, Matlab/Simulink/RTW",
      "UML/SysML/MARTE",
      "SQL, MySQL, PostgreSQL",
      "Pandas, NumPy, SciPy",
      "Scikit-learn, TensorFlow",
      "Git, SVN, LaTeX",
      "AUTOSAR, ISO26262, DO178"
    ]
  },
  {
    category: "Professional Skills",
    skills: [
      "Academic Leadership",
      "Curriculum Development",
      "Research Development and Management",
      "Graduate Student Mentorship",
      "Technical Documentation",
      "Quality Assurance",
      "ABET Accreditation",
      "Industrial Collaboration",
      "Conference Presentations"
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-400 pb-2">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
