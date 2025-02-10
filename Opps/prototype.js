function BankAcconut(custName, balance = 0) {
  this.name = custName;
  this.accountNum = Date.now();
  this.balance = balance;
}
BankAcconut.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAcconut.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const rohitAccount = new BankAcconut("rohit", 500);

rohitAccount.deposit(500);
rohitAccount.withdraw(200);

console.log(rohitAccount);

console.log(Array.prototype);
