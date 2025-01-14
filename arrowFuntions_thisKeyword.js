let username = "bob";

const user = {
  username: "tom",
  age: 12,
  details_1: function () {
    console.log(`name is ${this.username}`);
    console.log(this);
  },
  details_2: () => {
    console.log(`name is ${this.username}`);
    console.log(this);
  },

  details_3: function () {
    let test = () => {
      console.log(this.username);
    };
    test();
  },
};

user.details_1();
user.details_2();
user.details_3();

function normal() {
  console.log(this);
}
let arrow = () => {
  console.log(this);
};
normal();
arrow();
