// LOOPS EXERCISE
// 1
for (i = 1; i <= 7; i++){
    console.log(i);
}

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
}

// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
];

// 3b
for(item of wizards) {
    console.log(item);
}

// 4a
let harryPotterMovies = 0;
while(harryPotterMovies <= 8) {
    console.log(harryPotterMovies);
    harryPotterMovies++;
}
/*
while (true){
    harryPotterMovies++;
    console.log(harryPotterMovies);
    if (harryPotterMovies === 8){
        break;
    }
}
*/

// BONUS
// 5a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
    

// 5b
for(item1 of hogwartsHouses){
    // console.log(item1);
    for(item2 of item1){
        console.log(item2);
    }
}

// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];

// 6b
let fullQuote = "";
for(i = 0; i < quote.length; i++) {
    fullQuote += quote[i];
    if(i < quote.length - 1){
        fullQuote += " ";
    }
}
console.log(fullQuote);