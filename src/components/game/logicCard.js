export function newCard() {
  for (let i = 0; i < 24; i++) {
    setSquare(i);
  }
}

const colPlace = new Array(
  0,
  0,
  0,
  0,
  0, // B
  1,
  1,
  1,
  1,
  1, // I
  2,
  2,
  2,
  2, // N
  3,
  3,
  3,
  3,
  3, // G
  4,
  4,
  4,
  4,
  4
); // O

let usedNums = new Array(76);

function setSquare(thisSquare) {
  const currSquare = "square" + thisSquare;
  const colBasis = colPlace[thisSquare] * 15;
  let newNum;

  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
  document.getElementById(currSquare).className = "";
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}