// components/Sidebar.js

import React from 'react';

const Sidebar = ({ mainFields, onSubFieldClick }) => {
  const handleSubFieldClick = (subField) => {
    onSubFieldClick(subField);
  };

  return (
    <aside >
      {mainFields.map((mainField, index) => (
        <div key={index}>
          <h2>{mainField.title}</h2>
          <ul>
            {mainField.subFields.map((subField, subIndex) => (
              <li key={subIndex} onClick={() => handleSubFieldClick(subField.link)}>
                <p>{subField.title}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
