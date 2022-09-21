import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="layout-container">
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;