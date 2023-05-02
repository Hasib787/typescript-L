const users: {
  name: string;
  readonly age: number;
  // Literal Type
  company: "k3creative";
  isMarried: boolean;
  wife?: string;
} = {
  name: "Hasib",
  age: 29,
  company: "k3creative",
  isMarried: false,
  wife: "Happy",
};

//can't change the value if type is mentioned in readonly
// users.age = 27;
//Can't change the value when type is assigned as a value. It's called literal type.
// users.company = "k3creative Ltd."
