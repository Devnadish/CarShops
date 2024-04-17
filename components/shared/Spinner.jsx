import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-gray-200 rounded-full"></div>
    </div>
  );
};

export default Spinner;
