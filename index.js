function wakeDog(dogName="Byron", dogBreed="poodle"){
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName="Byron", dogBreed="poodle") {
  return `Leash ${dogName} the ${dogBreed}`
}

const walkToPark = (dogName="Byron", dogBreed="poodle") => {
  return `Walk to the park with ${dogName} the ${dogBreed}`
}


const throwFrisbee = (dogName="Byron", dogBreed="poodle") => {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}


const walkHome = (dogName="Byron", dogBreed="poodle") => {
  return `Walk home with ${dogName} the ${dogBreed}`
}

const unleashDog = (dogName="Byron", dogBreed="poodle") => {
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
