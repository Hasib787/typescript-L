//default parameter
function addNumber(num1: number, num2: number = 10): number {
  return num1 + num2;
}
console.log(addNumber(20));

//spread operator

const friends: string[] = ["Aman", "Noman", "Fuhad", "Tarit"];
const newFriends: string[] = ["Shovon", "Saiful", "Sazal"];

friends.push(...newFriends);

// console.log(friends);

const add = (num1: number, num2: number): number => num1 + num2;

const arr = [45, 32, 54, 6];

//rest parameter
const greeting = (...myFriends: string[]): void =>
  myFriends.forEach((friend) => console.log(`Hi ${friend}`));
greeting("Ruby", "python", "JavaScript", "Node");

//array and object destructuring
const [bestFriend] = friends;

const myBestFriend = {
    fullName: "Ifterkhar Noman",
    age: 29,
}

const {fullName} = myBestFriend;
console.log(fullName);

const newArray = arr.map((elem: number) => elem * elem);
console.log(newArray);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Hasib",
  balance: 500,
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  },
};

person.addBalance(232);
