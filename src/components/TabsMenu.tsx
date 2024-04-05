import React, { useState } from 'react';

type Tab = {
  label: string;
  content: React.ReactNode;
};


const TabsMenu: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };


  return (
    <div className="w-full ">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li key={index} className="me-2">
            <button onClick={() => handleTabClick(index)} className={`inline-block px-4 py-2 bg-gray-100 rounded-t-lg dark:text-blue-500 hover:text-purple-800  ${index === activeTab ? 'text-purple-800' : ''}`}>
              <div className={`border-b-2 hover:border-purple-800 ${index === activeTab ? 'border-purple-800' : ''}`}>
                {tab.label}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className='bg-white'>
        {tabs[activeTab].content}
      </div>

    </div>
  );
};
export default TabsMenu;