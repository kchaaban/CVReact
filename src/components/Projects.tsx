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
    <section className="py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-2">
          Key Projects
        </h2>

        <ProjectItem
          title="Smart Urban Mobility Platform"
          organization="IRT SystemX & City of Paris"
          period="2020 - Present"
          description="Leading the development of an integrated platform for optimizing urban mobility across multiple transportation modes, leveraging real-time data and predictive analytics."
          outcomes={[
            "Implemented machine learning algorithms that predict traffic congestion with 87% accuracy 30 minutes in advance",
            "Designed optimization models that reduce average commute times by 15% during peak hours",
            "Developed a real-time dashboard providing transportation insights to city officials and urban planners"
          ]}
        />

        <ProjectItem
          title="Transportation Network Resilience Analysis"
          organization="SAFESPOT - ANR Funded Project"
          period="2016 - 2018"
          description="Studied the resilience of transportation networks against disruptions using complex systems approaches and network theory."
          outcomes={[
            "Created a novel methodology for identifying critical infrastructure points in transportation networks",
            "Developed algorithms to optimize emergency response routing during network disruptions",
            "Published findings in Transportation Research Part C, increasing project visibility in the scientific community"
          ]}
        />

        <ProjectItem
          title="Sustainable Urban Logistics Optimization"
          organization="ELA Project - European Commission"
          period="2013 - 2015"
          description="Designed optimization algorithms for last-mile delivery in urban environments to reduce emissions and congestion."
          outcomes={[
            "Implemented a multi-objective optimization algorithm that reduced delivery vehicle emissions by 22%",
            "Developed simulation models to test various delivery strategies across different urban scenarios",
            "Created an interactive tool for logistics companies to optimize their delivery routes and schedules"
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;