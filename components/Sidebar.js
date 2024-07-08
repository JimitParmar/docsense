import React from 'react';

const Sidebar = ({ docs }) => {
  return (
    <aside className="sidebar">
      <ul>
        {docs.map((mainField, index) => (
          <li key={index}>
            <h3>{mainField.title}</h3>
            <ul>
              {mainField.subFields.map((subField, subIndex) => (
                <li key={subIndex}>
                  <a href={`#${subField.title.replace(/\s+/g, '-').toLowerCase()}`}>{subField.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
