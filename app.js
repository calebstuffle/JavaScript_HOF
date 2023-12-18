console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
  };
}
let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => console.log(user.name));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let newUsers = users.map((user) => {
  return {
    name: user.name,
    score: user.score,
  };
});

console.log(newUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// let activeUsers = users.filter((user) => {
//   if (user.isActive == true) {
//     return user;
//   }
// });

// OR //

let activeUsers = users.filter((user) => user.score >= 85);

console.log(activeUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => b.score - a.score); //swap if the result of b.score - a.score is positive; meaning b > a

console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

console.log(avgScore);
