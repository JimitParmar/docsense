import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <link rel="stylesheet" href="./styles/globals.css" />
      <div className="layout">{children}</div>
    </div>
  );
};

export default Layout;
