function User(name, age) {
  this.name = name;
  this.age = age;
}

let user_1 = new User("Mike", 18);

let user_2 = new user_1.constructor("Bob", 25);

console.log(user_2);