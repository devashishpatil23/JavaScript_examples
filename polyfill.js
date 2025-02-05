// map

const arr = [1, 2, 3, 4, 5];

const multiplyBy2 = arr.map((num, idx, arr) => {
  return num * 2;
});

Array.prototype.myMap = function (cb) {
  let temp = []; //as  map returns transformed array s
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]));
  }
};

const add_2 = arr.myMap((el) => {
  return el + 2;
});

// console.log(add_2);

// for each
const arr1 = [1, 2, 3, 4, 5, 6];
arr1.forEach((el) => console.log(el));
console.log("hello");
