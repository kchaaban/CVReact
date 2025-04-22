import React from 'react';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  company,
  location,
  period,
  description,
  technologies
}) => {
  return (
    <div className="mb-8 group">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          <p className="text-lg text-gray-700">
            {company} <span className="text-gray-500">| {location}</span>
          </p>
        </div>
        <p className="text-gray-500 mt-1 sm:mt-0">{period}</p>
      </div>
      <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
        {description.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
      {technologies && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-2">
          Professional Experience
        </h2>

        <ExperienceItem
          title="Associate Professor"
          company="Umm Al-Qura University"
          location="Makkah, Saudi Arabia"
          period="2015 - Present"
          description={[
            "Led quality assurance initiatives for academic programs, ensuring compliance with accreditation standards (ABET and NCAA)",
            "Defined curriculum for M.Sc. program in computer engineering and networking",
            "Participated in designing and launching new bachelor's program in data science",
            "Developed courses in Object-Oriented programming, web development, robotics, operating systems, and distributed systems",
            "Secured funding for research project on Machine Learning for Multi-modal Transportation Systems optimization"
          ]}
          technologies={["Python", "C++", "Machine Learning", "Data Science", "Robotics", "Operating Systems"]}
        />

        <ExperienceItem
          title="Associate Professor"
          company="ESTACA Engineering School"
          location="Laval, France"
          period="2007 - 2015"
          description={[
            "Chief manager of embedded systems team",
            "Delivered courses on real-time operating systems and model-based engineering",
            "Contributed to industrial projects including ELA (IRT-SystemX) and O4A-II (European project)",
            "Defined curriculum for new master's Program in embedded systems"
          ]}
          technologies={["Embedded Systems", "Real-time OS", "Model-based Engineering", "AUTOSAR", "ISO26262"]}
        />

        <ExperienceItem
          title="Joint Researcher"
          company="IRT-SystemX"
          location="Paris, France"
          period="2013 - 2015"
          description={[
            "Academic lead for Multi-Core Embedded Systems work package in ELA project",
            "Prepared technical reports and project communications",
            "Delivered technical training on automotive embedded systems",
            "Collaborated with industry partners on system optimization"
          ]}
          technologies={["Embedded Systems", "AUTOSAR", "Real-time Systems", "Technical Documentation"]}
        />

        <ExperienceItem
          title="Associate Researcher"
          company="CNRS, Heudiasyc Lab"
          location="Compiegne, France"
          period="2006 - 2007"
          description={[
            "Developed contextual scheduling techniques for online diagnostics at Renault Trucks",
            "Contributed to ANR and European R&D projects: Diafore, Safespot, and RoadSense",
            "Taught courses in C++, Java, VHDL/SystemC"
          ]}
          technologies={["C++", "Java", "VHDL", "SystemC", "Distributed Systems"]}
        />
      </div>
    </section>
  );
};

export default Experience;