import React from 'react';

interface ProjectProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  outcomes?: string[];
}

const ProjectItem: React.FC<ProjectProps> = ({
  title,
  organization,
  period,
  description,
  outcomes
}) => {
  return (
    <div className="mb-6 group">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          <p className="text-lg text-gray-700">{organization}</p>
        </div>
        <p className="text-gray-500 mt-1 sm:mt-0">{period}</p>
      </div>
      <p className="text-gray-700 mb-2">{description}</p>
      {outcomes && (
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {outcomes.map((outcome, index) => (
            <li key={index} className="leading-relaxed">
              {outcome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
      <div className="max-w-5xl mx-auto mt-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-400 pb-2">
          Key Projects
        </h2>

        <ProjectItem
          title="Using ML to Learn an Optimization Process for Multi-modal Transportation Systems"
          organization="Umm Al-Qura University, Saudi Arabia"
          period="2022 - 2023"
          description="This research proposal aims to provide a generic framework focusing on multimodal transportation with the main goal of optimizing the mobility system management by combining machine learning models with the optimization methods."
          outcomes={[
      "A generic and scalable framework allowing the integration of different mobility modes and optimization parameters",
            "Allowing competent authority to deploy the correct workforce planning and to employ the right resources depending on the periods and times",  
            "Reducing the crowd in the main stations and enhances the mobility system usability",
            "Reducing the energy consumption and CO2 emission"
          ]}
          />

<ProjectItem
  title="ELA: Electronic and Software for Autonomous Vehicles"
  organization="IRT SystemX, Paris"
  period="2013 - 2016"
  description="The ELA project has been launched in July 2013 in order to provide operational solutions allowing one to respond to the new technological and economic challenges in the automotive industry, notably with regard to network-connected vehicles and driving assistance systems."
  outcomes={[
    "The academic lead for the 'Multi-Core Embedded Systems' work package within the industrial ELA project (details: http://www.irt-systemx.fr/project/ela/).",
    "Prepared technical reports and project communications.",
    "Delivered technical training sessions to project members on automotive embedded systems."
  ]}
/>

{/* <div style={{ marginTop: '3cm' }}></div> */}

<ProjectItem
  title="SAFESPOT: Cooperative vehicles and road infrastructure for road safety"
  organization="European FP6 Funded Project"
  period="2006 - 2010"
  description="SAFESPOT is an integrated project co-funded by the European Commission Information Society Technologies under the 6th Framework Program. The project focuses on designing cooperative systems for road safety based on vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication. It aims to prevent road accidents by developing a Safety Margin Assistant to detect potentially dangerous situations in advance and extend drivers’ awareness of their surroundings in space and time, leveraging wireless communications. Additionally, the project involved studying the resilience of transportation networks against disruptions using complex systems approaches and network theory."
  outcomes={[
    "Created a novel methodology for identifying critical infrastructure points in transportation networks",
    "Developped new methods of contextual scheduling for online diagnostic of distributed electronic functions at Renault trucks",
    "Published findings in international journbals and conferences"
  ]}
/>
 
        
      </div>
  );
};

export default Projects;