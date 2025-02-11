// slice

const array = [1, 2, 3, 4, 5, 6];

const sliceIt = array.slice(1, 5);
const slice1 = array.slice(1); //remove first
const slice2 = array.slice(array.length - 1); // to remove all before last index value

console.log(sliceIt);
console.log(array);

// slice

const spliceArray = ["hi", "remove me", "remove me", "bye"];

const spliceIt = spliceArray.splice(1, 2, "added me", "also me");

console.log(spliceArray, spliceIt);
