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
    document.getElementById(currSquare).onmousedown = toggleColor;
  }
  
  function getNewNum() {
    return Math.floor(Math.random() * 15);
  }
  
  let thisSquare;
  function toggleColor(event) {
    if (event.target) {
      thisSquare = event.target; // most browsers
    } else {
      thisSquare = window.event.srcElement; // Windows Internet Explorer
    }
  
    if (thisSquare.className === "") {
      thisSquare.className = "bgSelected";
    } else {
      thisSquare.className = "";
    }
  }
  
  const initialBall = 1;
  const finalBall = 75;
  const usedBallNums = [];
  
  
  export const generateBall = () => {
      const valueBall = Math.floor(Math.random() * (initialBall-finalBall) + finalBall);
      usedBallNums.push(valueBall);
      console.log('valueBall',valueBall);
      console.log('usedBallNums',usedBallNums);
    return valueBall;
  }
  
  // export const selectedNumberCard = () => {
  //     console.log('document.getElementById(event.target).value',document.getElementById(event.target).value);
  // }