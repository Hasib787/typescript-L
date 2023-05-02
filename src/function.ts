function addNumber(num1: number, num2: number): number {
  return num1 + num2;
}

const add = (num1: number, num2: number): number => num1 + num2;

const arr = [45, 32, 54, 6];

const newArray = arr.map((elem: number) => elem * elem);
console.log(newArray);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Hasib",
  balance: 500,
  addBalance(money: number){
    console.log(`My new balance is ${this.balance + money}`);
  },
};
