let car = {
  type: "electric",
  wheels: 4,
};

let sportCar = {
  doors: 2,
};

Object.setPrototypeOf(sportCar, car);

let passengerCar = Object.create(car, {
  doors: {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

let toyCar = Object.create(
  { ...car, ...sportCar },
  {
    type: {
      value: "toy",
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
);

console.log(toyCar);
