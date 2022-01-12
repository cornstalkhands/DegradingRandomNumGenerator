import Header from "./componets/Header";
import { Helmet } from "react-helmet";
import EnterStart from "./componets/EnterStart";
import StartNumber from "./componets/StartNumber";
import { useState } from "react";
import RandomNumber from "./componets/RandomNumber";
import Set from "./componets/Set";
import Reset from "./Reset";

function App() {
  const [startingNum, setStartingNum] = useState(10);
  const [firstStartingNum, setFirstStartingNum] = useState(10);
  const [useMillions, setUseMillions] = useState(true);
  const [generatedRandom, setGeneratedRandom] = useState("---");

  const getStartingNum = (recievedStartNum) => {
    // console.log("got num", recievedStartNum);
    setStartingNum(recievedStartNum);
    setFirstStartingNum(recievedStartNum);
  };

  const setMaxAsRand = () => {
    if (generatedRandom === "---") {
      return;
    }
    setStartingNum(useMillions ? generatedRandom / 1000000 : generatedRandom);
  };

  const getMillions = (recievedMillions) => {
    // console.log("got millions", recievedMillions);
    setUseMillions(recievedMillions);
  };

  const getRandom = (recievedRandom) => {
    setGeneratedRandom(recievedRandom);
  };

  const resetAll = () => {
    setGeneratedRandom("---");
    setStartingNum(firstStartingNum);
  };

  return (
    <div className="app">
      <Helmet>
        <style>{"body { background-color: #383838; }"}</style>
      </Helmet>

      <Header />
      <EnterStart onEnter={getStartingNum} onMillions={getMillions} />
      <RandomNumber
        maxNum={startingNum}
        millions={useMillions}
        onRandom={getRandom}
        randomDisplay={generatedRandom}
      />
      <hr className="line" />
      <StartNumber startNum={startingNum} millions={useMillions} />
      <Set onClick={setMaxAsRand} />
      <Reset onClick={resetAll} />
    </div>
  );
}

export default App;
