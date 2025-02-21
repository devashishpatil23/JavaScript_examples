// behind the sences same as contruntor function
class BankAcconut {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  witdraw(amount) {
    this.#balance -= amount;
  }

  setBalance(amount) {
    this.#balance = amount;
  }
}

class CurrentAccount extends BankAcconut {
  trasactionLimit = 5000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takeBusinessLoan(amount) {
    console.log("taking buisnnes loan" + amount);
  }
}

const rakeshAcnt = new CurrentAccount("rakesh", 500);

rakeshAcnt.setBalance(600);

console.log(rakeshAcnt);
