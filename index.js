const wakeDog = (dogName, dogBreed) => {
    if (dogName===undefined && dogBreed ===undefined){
        let dogName = "Byron";
        let dogBreed = "poodle";
        return (`Wake ${dogName} the ${dogBreed}`);
    }
    return (`Wake ${dogName} the ${dogBreed}`);
}

const leashDog = (dogName="Byron", dogBreed="poodle") => {
    if (dogName===undefined && dogBreed ===undefined){
        let dogName = "Byron";
        let dogBreed = "poodle";
        return (`Leash ${dogName} the ${dogBreed}`);
    }
    return (`Leash ${dogName} the ${dogBreed}`);
}

const walkToPark= (dogName, dogBreed) => {
    if (dogName===undefined && dogBreed ===undefined){
        let dogName = "Byron";
        let dogBreed = "poodle";
        return (`Walk to the park with ${dogName} the ${dogBreed}`);
    }
    return (`Walk to the park with ${dogName} the ${dogBreed}`);
}
const throwFrisbee = (dogName, dogBreed) => {
    if (dogName===undefined && dogBreed ===undefined){
        let dogName = "Byron";
        let dogBreed = "poodle";
        return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    }
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

const walkHome = (dogName, dogBreed) => {
    if (dogName===undefined && dogBreed ===undefined){
        let dogName = "Byron";
        let dogBreed = "poodle";
        return (`Walk home with ${dogName} the ${dogBreed}`);
    }
    return (`Walk home with ${dogName} the ${dogBreed}`);
}

const unleashDog = (dogName, dogBreed) => {
    if (dogName===undefined && dogBreed===undefined){
        let dogName = "Byron";
        let dogBreed = "poodle";
       return (`Unleash ${dogName} the ${dogBreed}`);
    }
   return (`Unleash ${dogName} the ${dogBreed}`);
}

const routine =[wakeDog, 
                leashDog, 
                walkToPark, 
                throwFrisbee, 
                walkHome, 
                unleashDog]


const exerciseDog = (dogName, dogBreed) => {
    for(let i=0; i<routine.length; i++){
        routine[i](dogName, dogBreed)
    }
}

