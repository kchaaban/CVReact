import React from 'react';

const respons = [
  "Team leader of embedded systems division at ESTACA engineering school",
  "Reviewer and Program Committee (PC) member of several IEEE/ACM international journals and conferences",
  "Member of CE program management committee",
  "PI and partner of several funded research and industrial projects",
  "Member of different scientific committees including French Society of Systems Engineering (AFIS) and INCOSE organization",
  "Supervision of several PhD and masters’ projects",
  
];

const Responsabilities: React.FC = () => {
  return (
      <div className="max-w-5xl mx-auto mt-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-gray-400 pb-2">
          Scientific Responsabilities
        </h2>

        <ul className="space-y-2">
          {respons.map((item, index) => (
            <li key={index} className="text-gray-700 flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Responsabilities;
