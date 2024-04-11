import React from "react";

const Navbar = () => {
  const navStyles = {
    padding: "5px 20px",
    position: "sticky",
    top: "0",
    background: "white",
    zIndex: "10",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  };
  const headerStyles = {
    fontSize: "20px",
    fontWeight: "500",
    color: "black",

  }
  return (
    <div style={navStyles}>
      <h1 style={headerStyles}>Account Settings</h1>
    </div>
  );
};

export default Navbar;
