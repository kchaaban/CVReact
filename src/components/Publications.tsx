import React from 'react';

interface PublicationsProps {
  isExporting?: boolean;
}

const Publications: React.FC<PublicationsProps> = ({ isExporting }) => {
  return (
<div className="py-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-2">
                  Publications & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={"p-6 rounded-lg shadow " + (isExporting ? "bg-white" : "bg-white")}>
            <h3 className={"text-xl font-bold mb-4 " + (isExporting ? "text-black" : "text-gray-800")}>Publications</h3>
            <ul className={"space-y-2 " + (isExporting ? "text-black" : "text-gray-700")}>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                h-index: 10
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                35 international publications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                2 book chapters
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                323 citations
              </li>

              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Recent publications:
              </li>
              <ol>
              A. K. Chaaban and N. Alfadl, "A comparative study of machine learning approaches for an accurate predictive modeling of solar energy generation", <i>Journal of Energy Reports</i>, 12:1293–1302, 2024 DOI: https://doi.org/10.1016/j.egyr.2024.07.010
              </ol>
              <ol> A. K. Chaaban. "A New Algorithm for Real-Time Scheduling and Resource Mapping for Robot Operating Systems (ROS). <i>Journal of Applied Sciences</i>, 13(3), 1532, 2023 DOI https://doi.org/10.3390/app13031532
              </ol>
              
              <li className="mt-4">
                <a 
                  href="https://scholar.google.com/citations?user=B1hDTjMAAAAJ&hl=en"
                  className={"hover:text-blue-800 transition-colors " + (isExporting ? "text-blue-900" : "text-blue-600")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google Scholar Profile →
                </a>
              </li>
            </ul>
          </div>

          <div className={"p-6 rounded-lg shadow " + (isExporting ? "bg-white" : "bg-white")}>
            <h3 className={"text-xl font-bold mb-4 " + (isExporting ? "text-black" : "text-gray-800")}>Distinctions & Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className={"font-semibold mb-2 " + (isExporting ? "text-black" : "text-gray-800")}>Awards</h4>
                <ul className={"space-y-2 " + (isExporting ? "text-black" : "text-gray-700")}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    First prize, E-Learning Competition at UQU University, 2020
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Best paper award, PECCS 2015 conference, France
                  </li>
                  <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              CNRS BDI scholarship for PhD studies (2002-2005)
              </li>
              <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              CNRS BDI scholarship for M.Sc. studies (2002-2002)
              </li>
                </ul>
              </div>
              <div>
                <h4 className={"font-semibold mb-2 " + (isExporting ? "text-black" : "text-gray-800")}>Recent Certifications</h4>
                <ul className={"space-y-2 " + (isExporting ? "text-black" : "text-gray-700")}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Google Cloud Digital Leader Certification Bootcamp (2025)
                  </li>
            
        
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Machine Learning, Stanford University (2021)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Accredited trainer on e-learning systems (2018)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Publications;
