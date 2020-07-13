const { clearInterval } = require("timers");

function sayHello() {
  console.log("Hello San");
}

// function rocks(who) {
//   console.log(who + " rocks!");
// }

// function sayHelloAfter(seconds) {
//   console.log("Hello after " + seconds + " seconds!");
// }

// // setTimeout(sayHello, 4 * 1000);
// // setTimeout(rocks, 2 * 1000, "San");
// setTimeout(sayHelloAfter, 4 * 1000, 4);
// setTimeout(sayHelloAfter, 8 * 1000, 8);

// function timerId() {
//   setTimeout(() => {
//     console.log("You wil not see this one!");
//   }, 4*1000);
// }

// timerId();

// setInterval(sayHello, 2 * 1000);
// const timerId = setTimeout(() => {
//   console.log("You wil not see this one!");
// }, 4 * 1000);

// clearTimeout(timerId);

// function delayedIntervals(delay) {
//   let count = 0;
//   const intervalId = setInterval(() => {
//     count++;
//     //console.log(count);
//     if (count < 5) {
//       console.log("Hello World" + delay * 100);
//     } else {
//       clearInterval(intervalId);
//       delayedIntervals(delay + 1);
//     }
//   }, delay * 1000);
// }

// delayedIntervals(1);

// const greeting = (delay) =>
//   setTimeout(() => {
//     let count = 0;
//     const intervalId = setInterval(() => {
//       count++;
//       if (count < 5) {
//         console.log("Hello World " + count);
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 1 * 1000);
//     greeting(delay + 1);
//   }, delay * 1000);

// greeting(1);
let lastIntervalId,
  counter = 5;

const greeting = (delay) => {
  if (counter === 5) {
    counter = 0;
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log("Hello World. " + delay);
      greeting(delay + 100);
    }, delay);
  }

  counter += 1;
};

greeting(100);
