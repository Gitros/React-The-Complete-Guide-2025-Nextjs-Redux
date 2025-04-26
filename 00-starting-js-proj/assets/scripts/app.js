// import { apiKey } from "./util.js";

// import apiKey from "./util.js";

// import * as util from "./util.js";

// console.log(util.apiKey);

// function greetUser(userName, message) {
//   return "Hi i am " + userName + "." + message;
// }

// greetUser("Max", "Hello!");
// greetUser("Max", "Hello test!");

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
  },
};

console.log(user.name);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Manuel", 35);
console.log(user1);
