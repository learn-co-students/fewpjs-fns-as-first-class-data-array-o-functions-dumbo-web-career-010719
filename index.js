function wakeDog(dogName, dogBreed){
	if (dogName == undefined && dogBreed == undefined){
		dogName = "Byron";
		dogBreed = "poodle";
  		return (`Wake ${dogName} the ${dogBreed}`);
	}
  return (`Wake ${dogName} the ${dogBreed}`);
}

// function wakeDog(dogName, dogBreed){
// 	if (dogName == undefined){
// 		dogName = "Byron";
// 	}
// 	if (dogBreed == undefined){
// 		dogBreed = "poodle";
// 	}
//   return (`Wake ${dogName} the ${dogBreed}`);
// }

function leashDog(dogName, dogBreed){
	if (dogName === undefined){
		dogName = "Byron";
	}
	if (dogBreed === undefined){
		dogBreed = "poodle";
	}
  return (`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed){
	if (dogName === undefined){
		dogName = "Byron";
	}
	if (dogBreed === undefined){
		dogBreed = "poodle";
	}
  return (`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed){
	if (dogName === undefined){
		dogName = "Byron";
	}
	if (dogBreed === undefined){
		dogBreed = "poodle";
	}
  return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed){
	if (dogName === undefined){
		dogName = "Byron";
	}
	if (dogBreed === undefined){
		dogBreed = "poodle";
	}
  return (`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed){
	if (dogName === undefined){
		dogName = "Byron";
	}
	if (dogBreed === undefined){
		dogBreed = "poodle";
	}
  return (`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(){
	let i = 0
	while (i < routine.length){
		routine[i]();
	}
}

