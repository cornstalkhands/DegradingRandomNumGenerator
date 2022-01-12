const RandomNumber = ({ maxNum, millions, onRandom, randomDisplay }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const generateRandom = (maxNum, millions) => {
    var generatedRandom = getRandomInt(
      1 + (millions ? maxNum * 1000000 : maxNum)
    );
    while (generatedRandom === 0) {
      generatedRandom = getRandomInt(
        1 + (millions ? maxNum * 1000000 : maxNum)
      );
    }
    onRandom(generatedRandom);
  };
  return (
    <div>
      <p className="random-number">{randomDisplay}</p>
      <button
        onClick={() => {
          generateRandom(maxNum, millions);
        }}
        className="random-number-button"
      />
    </div>
  );
};

export default RandomNumber;
