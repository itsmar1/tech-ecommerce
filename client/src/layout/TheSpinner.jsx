import React from "react";

const TheSpinner = () => {
  return (
    <div className="w-full py-20 mx-auto">
      <div className="w-24 h-24 rounded-full mx-auto border-8 border-solid border-[#f3f3f3] border-t-8 border-t-[#3498db] animate-spin"></div>
    </div>
  );
};

export default TheSpinner;
