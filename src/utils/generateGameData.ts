export const generateGameData = (numOfCards: number) => {
  const gameData = generateGameArray(numOfCards);
  const mirrorGameData = [];

  for (let i = 0; i < gameData.length; i++) {
    let newId = gameData[i].id + numOfCards;
    mirrorGameData.push({
      id: newId,
      value: gameData[i].value,
      img: gameData[i].img,
      isOpen: false,
      isClicked: false,
      isDone: false,
    });
  }
  const gameDataWithRandom = gameData.concat(mirrorGameData);
  return gameDataWithRandom.sort(() => Math.random() - 0.5);
};

const generateGameArray = (numOfCards: number) => {
  const gameData = [];
  const halfOfNumOfCards = Math.ceil(numOfCards / 2);

  for (let i = 0; i < halfOfNumOfCards; i++) {
    gameData.push({
      id: i,
      value: `${i}`,
      img: `https://picsum.photos/200/300?random=${i}`,
      isOpen: false,
      isClicked: false,
      isDone: false,
    });
  }
  return gameData;
};
