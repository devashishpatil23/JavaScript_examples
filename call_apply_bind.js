// call

const user1 = {
  name: "swami",
  age: "25",
};
const user2 = {
  name: "sunny",
  age: "30",
};
const user3 = {
  name: "nikhil",
  age: "30",
};

const printDetails = function (company, city) {
  return console.log(
    `name is ${this.name} and compmay is ${company} from ${city}`
  );
};

printDetails.call(user1, "Yardi", "dhule");
printDetails.call(user2, "Birla Soft", "pune");
printDetails.apply(user3, ["jpmc", "pune"]);
printDetails.call(user1, "jpmc", "pune");

// bind

const bindMethod = printDetails.bind(user1, "yardi", " bind");

bindMethod();
