"use strict";

function OpeningCeremony(callback) {
  // console.log("score are: " + JSON.stringify(scores));
  const scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  };
  setTimeout(() => {
    console.log("Let the games begin");
  }, 1000);

  setTimeout(() => {
    Race100M(scores, callback);
  }, 3000);
}

function Race100M(scores, callback) {
  let usedValues = [];
  console.log("Previous score:", scores);
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
  let color = arr[0];
  //newScores = Object.fromEntries(arr); not supported

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i][0];
    const value = arr[i][1];
    newScores[key] = value;
  }
  console.log(
    `${color.slice(0, -1)} won the Race100M Jump`
  );
  console.log("Updated score:", newScores);
  setTimeout(() => {
    LongJump(newScores, callback);
  }, 2000);
}

function LongJump(newScores, callback) {
  console.log("Previous score:", newScores);
  let arr = Object.keys(newScores);
  let res = arr[Math.floor(Math.random() * arr.length)];
  newScores[res] += 150;
  console.log(`${res} won the Long Jump`);
  console.log("Updated score:", newScores);

  HighJump(newScores, callback);
}

function HighJump(newScores, callback) {
  console.log("Previous score:", newScores);
  let color = "";
  let ans = prompt("What color secured the highest jump");
  if (ans) {
    ans = ans.toLowerCase();
    if (ans === "green") {
      newScores.green += 100;
      color = "green";
      console.log(`${color} won the High Jump`);
    } else if (ans === "yellow") {
      newScores.yellow += 100;
      color = "yellow";
      console.log(`${color} won the High Jump`);
    } else if (ans === "red") {
      newScores.red += 100;
      color = "red";
      console.log(`${color} won the High Jump`);
    } else if (ans === "blue") {
      newScores.blue += 100;
      color = "blue";
      console.log(`${color} won the High Jump`);
    } else {
      console.log("Event was cancelled");
    }
  }

  console.log("Updated score:", newScores);
  callback(newScores);
}

function AwardCeremony(newScore) {
  console.log("Previous score:", newScore);
  let arr = Object.entries(newScore);
  arr.sort((a, b) => {
    b[1] - a[1];
  });
  // newScore = arr.Object.fromEntries(arr);

  console.log(
    `${arr[0][0]} came first with ${arr[0][1]} points. ` +
      `${arr[1][0]} came second with ${arr[1][1]} points. ` +
      `${arr[2][0]} came third with ${arr[2][1]} points. ` +
      `${arr[3][0]} came fourth with ${arr[3][1]} points.`
  );
}

OpeningCeremony((score) => {
  AwardCeremony(score);
});
