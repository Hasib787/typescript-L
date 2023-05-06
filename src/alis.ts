type PersonType = {
  name: string;
  age?: number;
  phone: number;
  profession: string;
};

const person1: PersonType = {
  name: "Hasib",
  age: 27,
  phone: 3116,
  profession: "Software Engineer",
};

const person2: PersonType = {
  name: "Aman",
  age: 26,
  phone: 12132,
  profession: "Software Engineer",
};

type PersonMarriedType = boolean;

const isPerson2Married: PersonMarriedType = false;

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x - y));
console.log(calculate(10, 20, (x, y) => x / y));
console.log(calculate(10, 20, (x, y) => x * y));
