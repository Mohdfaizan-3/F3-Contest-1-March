"use strict";

function OpeningCeremony() {
  const scores = { red: 0, blue: 0, green: 0, yellow: 0 };
  setTimeout(() => {
    console.log("Let the games begin");
    Race100M(scores);
  }, 1000);
}

function Race100M(scores) {
  let usedValues = [];

  function generateRandomValue() {
    let value;
    do {
      value = Math.floor(Math.random() * 6) + 10;
    } while (usedValues.includes(value));
    usedValues.push(value);
    return value;
  }

  let newScores = { ...scores };
  newScores = {
    red: generateRandomValue(),
    blue: generateRandomValue(),
    green: generateRandomValue(),
    yellow: generateRandomValue(),
  };

  let arr = Object.entries(newScores);
  arr.sort((a, b) => {
    return b[1] - a[1];
  });

  let points = [50, 25, 0, 0];
  arr.forEach((value, index) => {
    value[1] = points[index];
  });

  newScores = Object.fromEntries(arr);

  setTimeout(() => {
    LongJump(newScores);
  }, 3000);
}

function LongJump(newScores) {
 
    let arr = Object.keys(newScores);
    let res = arr[Math.floor(Math.random() * arr.length)] 
    newScores[res] += 150;
    console.log(newScores);

  setTimeout(() => {
    
  }, 2000);
}

OpeningCeremony();
