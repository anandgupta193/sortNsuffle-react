const shuffle = (cards) => {
  const shuffledArray = [...cards];
  for (let i = shuffledArray.length - 1; i >= 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * shuffledArray.length);
    const temp = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = shuffledArray[i];
    shuffledArray[i] = temp;
  }
  return shuffledArray;
};

export default shuffle;
