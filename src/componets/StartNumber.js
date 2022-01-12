import { useState } from "react";

const StartNumber = ({ startNum, millions }) => {
  return (
    <p className="start-number">
      {Math.ceil(millions ? startNum * 1000000 : startNum)}
    </p>
  );
};

export default StartNumber;
