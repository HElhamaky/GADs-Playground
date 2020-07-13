class Person {
  constructor(name) {
    this.name = name;
  }
  great() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  great() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const case1 = new Person("Max");
const case2 = new Student("Tina", "1st Grade");
const case3 = new Student("Mary", "2nd Grade");

case3.great = () => console.log("I am special");

case1.great();
case2.great();
case3.great();
// const [first, ...restOfItems] = [10, 20, 30, 40];

// const data = {
//   temp1: "001",
//   temp2: "002",
//   firstName: "Ahmed",
//   lastName: "Khaled",
// };

// const { temp1, temp2, ...person } = data;
// const newObj = {
//   ...person,
// };
// console.log(newObj);
// console.log(restOfItems);

// // const PI = Math.PI;
// // const E = Math.E;
// // const SQRT = Math.SQRT;
// const { PI, E, SQRT } = Math;

// const circle = {
//   label: "circleX",
//   radius: 2,
// };

// const circleArea = ({ radius }, { precision = 2 } = {}) =>
//   (PI * radius * radius).toFixed(precision);

// console.log(circleArea(circle, { precision: 5 }));

// //Dynamic Property syntax
// const id = "secret";
// const testObj = {
//   element: "El1",
//   [id]: "89564534",
// };

// console.log(testObj.secret);

// const testObj = {
//   func1() {
//     // this will be the caller itself
//     console.log("func1", this);
//   },
//   func2: () => {
//     // this will be the scope where caller exist
//     console.log("func2", this);
//   },
// };

// testObj.func1();
// testObj.func2();

// const numbers = [1, 2, 3];
// numbers[0] = 5;
// console.log(numbers);

// const person = {
//   firstName: "Ahmed",
//   lastName: "Khaled",
// };

// Object.freeze(person);
// person.firstName = "Ali";

// console.log(person.firstName);
