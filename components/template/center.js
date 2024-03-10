import React from "react";

const center = ({ className = "w-full h-full", children }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default center;
