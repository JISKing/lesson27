function UserType(name) {
  for (let i = 0; i < name.length; ++i) {
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty(this, "length", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }

  this.join = function (separator) {
    return Array.prototype.join.call(this, separator);
  };
}

let admins = new UserType(["Mike", "Bob", "Nikola"]);

console.log(admins.join("; "));
