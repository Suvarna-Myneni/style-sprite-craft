
import React, { useState } from "react";
import "./tab-with-radius.css";

interface TabComponentProps {
  activeTab?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const TabComponent: React.FC<TabComponentProps> = ({ 
  activeTab = false, 
  className = "", 
  children = "Tab", 
  onClick 
}) => {
  return (
    <button 
      className={`tab-component ${activeTab ? 'active' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface TabWithRadiusProps {
  tabs?: string[];
  defaultActive?: number;
}

export const TabWithRadius: React.FC<TabWithRadiusProps> = ({ 
  tabs = ["Tab Active", "Tab Inactive", "Tab Inactive"],
  defaultActive = 0
}) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <div className="tab-with-radius">
      <div className="tab-frame">
        {tabs.map((tab, index) => (
          <TabComponent
            key={index}
            activeTab={activeTab === index}
            className="tab-component-item"
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </TabComponent>
        ))}
      </div>
    </div>
  );
};
