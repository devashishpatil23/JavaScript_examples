// ----------------map

const arr = [1, 2, 3, 4, 5];

const multiplyBy2 = arr.map((num) => {
  return num * 2;
});

Array.prototype.myMap = function (cb) {
  let temp = []; //as  map returns transformed array s
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const add_2 = arr.myMap((el) => {
  return el + 2;
});

console.log(add_2);

//---------------- for each
const arr1 = [1, 2, 3, 4, 5, 6, 7];
// arr1.forEach((el) => console.log(el));

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

arr.myForEach((i) => {
  return console.log(i);
});

// -----------------filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const greterThenFive = numbers.myFilter((e) => e > 5);

console.log(greterThenFive);

//---------------------- reduce
Array.prototype.myReduce = function (cb, intVal) {
  let acc = intVal;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

const sumOfArr = arr1.myReduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sumOfArr);
