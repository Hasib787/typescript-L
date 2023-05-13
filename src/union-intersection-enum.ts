type NoobDeveloper = {
  name: string;
  age: number;
};

type JuniorDeveloper = {
  name: string;
  experience: number;
  expertise: string;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: "junior" | "mid" | "senior";
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Aman",
  expertise: "Python",
  experience: 1,
};
console.log(newDeveloper);

const developer: NextLevelDeveloper = {
  name: "Hasib",
  experience: 2,
  expertise: "JavaScript Developer",
  leaderShipExperience: 1,
  level: "senior",
};

console.log(developer);
