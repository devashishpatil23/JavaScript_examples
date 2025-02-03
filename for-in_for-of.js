const myObj = { name: "deva", age: "26", job: "frontend dev" };

for (let key in myObj) {
  console.log(myObj[key]);
}
const arrayObj = [
  { name: "deva", age: "26", job: "frontend dev" },
  { name: "swami", age: "20", job: "hello" },
];
for (let user in arrayObj) {
  console.log(`${arrayObj[user].name}: ${arrayObj[user].job}`);
}

//  for of

const fruits = ["apple", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
