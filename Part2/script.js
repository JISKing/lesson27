let employees = {
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

let frontendDeveloper = {
  wallet: {},
  name: "Mike",
};
Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
  wallet: {},
  name: "Bob",
};
Object.setPrototypeOf(backendDeveloper, employees);

backendDeveloper.pay("june", 1500);

backendDeveloper.pay("june", 1500);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

// Я просто добавил каждому отдельный кошелек