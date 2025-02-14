const person = {
  name: "devashish",
  age: 26,
  addeess: {
    city: "dhule",
  },
};

const shallowCopy = { ...person };

shallowCopy.addeess.city = "pune";

console.log(shallowCopy);
console.log(person);

const deepcopy = JSON.parse(JSON.stringify(person));
deepcopy.addeess.city = "new york";

console.log(person);
console.log(deepcopy);

// Shallow Copy	When dealing with flat objects (no nested structures) or when you need a reference to shared data. Example: Copying configuration objects that should reflect global updates.

// Deep Copy	When working with deeply nested objects to prevent unintended modifications. Example: Duplicating API response data to prevent mutations in state management.

const _ = require("lodash");

const obj3 = {
  name: "Devashish",
  address: { city: "Pune", country: "India" },
};

const deepCopyLodash = _.cloneDeep(obj3);

deepCopyLodash.address.city = "Mumbai";

console.log(obj3.address.city); // Output: "Pune"
console.log(deepCopyLodash.address.city); // Output: "Mumbai"
