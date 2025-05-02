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
            "Secured funding for research project on Machine Learning for Multi-modal Transportation Systems optimization",
            "Taught courses for undergradute and graduate students in Python, Java, Networks, Distributed Systems, Operating Systems, Databases, Applied statistics, ML, and full-stack web developpement",
          ]}
          technologies={["Python", "C++", "Smart cities", "Machine Learning", "Data Science", "Robotics", "Networks", "Microcontrollers design", "Operating Systems"]}
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
            "Defined curriculum for new master's Program in embedded systems",
            "Taught several courses focused for graduate and undergraduate students primarily on real-time programming, software engineering, and embedded real-time systems."
          ]}
          technologies={["Embedded Systems", "Mobility systems", "Real-time OS", "Model-based Engineering", "AUTOSAR", "ISO26262"]}
        />
{/* Vertical space */}
<div style={{ marginTop: '3cm' }}></div>
<ExperienceItem
  title="Join Researcher"
  company="IRT-SystemX"
  location="Paris, France"
  period="2013 - 2015"
  description={[
    "The academic lead for the 'Multi-Core Embedded Systems' work package within the industrial ELA project (details: http://www.irt-systemx.fr/project/ela/).",
    "Prepared technical reports and project communications.",
    "Delivered technical training sessions to project members on automotive embedded systems."
  ]}
  technologies={["Embedded Systems", "Automotive Systems", "Technical Training"]}
/>

<ExperienceItem
  title="Part-time Lecturer"
  company="Maine University"
  location="Laval, France"
  period="2011 – 2013"
  description={[
    "Provided lectures on Android system development and Linux operating system."
  ]}
  technologies={["Android", "Linux"]}
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
          technologies={["C++", "Java", "VHDL", "ADAS systems", "SystemC", "Distributed Systems"]}
        />
        

<ExperienceItem
          title="Ph.D. in Information and Systems Technologies"
          company="UTC/CNRS, Heudiasyc Lab"
          location="Compiègne, France"
          period="2002 - 2006"
          description= {["Title: A Distributed Real-Time Architecture For Advanced Vehicles",
            "Roadsense project: A European project on ADAS prototyping",
             "Taught courses in C/C++, Real-time Operating Systems"
            ]
          }
          technologies={["C/C++", "Middleware", "ADAS systems", "Real-time scheduling", "Distributed Systems"]}
        />

        <ExperienceItem
          title="M.Sc. in Information and Systems Technologies"
          company="Université de Technologie de Compiègne (UTC)"
          location="Compiègne, France"
          period="2001 - 2002"
          description= {["Title: Distributed real-time system for Multimedia applications"]}
        />

        <ExperienceItem
          title="Engineering Degree in Computer Systems and Telecommunications"
          company="Faculty of Engineering, Lebanese University"
          location="Lebanon"
          period="1996 - 2001"
          description= {[]}
        />

      </div>
  );
};

export default Experience;