import { useState } from "react";

const EnterStart = ({ onEnter, onMillions }) => {
  const [num, setNum] = useState(10);
  const [millions, setMillions] = useState(true);

  const numChanged = (e) => {
    var parsedNum;
    if (e.target.value === "") {
      parsedNum = 0;
    } else {
      var parsedNum = parseInt(e.target.value, 10);
    }

    setNum(parsedNum);
    onEnter(parsedNum);
  };
  const checkChanged = (e) => {
    setMillions(e.currentTarget.checked);
    onMillions(e.currentTarget.checked);
  };
  return (
    <div>
      <label className="start">Start</label>
      <input
        className="enter-num"
        type="text"
        placeholder="10"
        value={num}
        onChange={numChanged}
      />
      <input
        className="millions-check"
        type="checkbox"
        value={millions}
        onChange={checkChanged}
        checked={millions}
      />
      <label className="millions-label">Millions</label>
    </div>
  );
};

export default EnterStart;
