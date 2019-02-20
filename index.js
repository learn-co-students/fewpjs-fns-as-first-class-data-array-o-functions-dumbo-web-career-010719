
console.log("Wake Byron the poodle");
console.log("Leash Byron the poodle");
console.log("Walk to the park with Byron the poodle");
console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle");


const wakeDog = (dogName="Byron", dogBreed="poodle") => {
  return `Wake ${dogName} the ${dogBreed}`;
};

const leashDog = (dogName="Byron", dogBreed="poodle") => {
  return `Leash ${dogName} the ${dogBreed}`;
};

const walkToPark = (dogName="Byron", dogBreed="poodle") => {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
};

const throwFrisbee = (dogName="Byron", dogBreed="poodle") => {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
};

const walkHome = (dogName="Byron", dogBreed="poodle") => {
  return `Walk home with ${dogName} the ${dogBreed}`;
};

const unleashDog = (dogName="Byron", dogBreed="poodle") => {
  return `Unleash ${dogName} the ${dogBreed}`;
};

const routine = [wakeDog, leashDog, walkHome, walkToPark, throwFrisbee, unleashDog]

const exerciseDog = () => {
  for (let i = 0; i < array.length; i++) {
    routine[i]
  }
}
