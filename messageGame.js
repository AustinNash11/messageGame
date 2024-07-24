
//An Object that contains all the arrays that are needed for the random message generator
const gameObject = {
    gameOptions: ['Never have I ever', 'Would you rather', 'Kiss, Marry, Kill'],
    optionOne: ['Driven a fourwheeler', 'Jumped off a bridge', 'Ate a ghost pepper'],
    optionTwo: ['Eat the hottest wings in the world once a year or never eat a wing again', 'Speak every language in the world except English or only speak English', 'Be a professional baseball player or professional football player'],
    optionThree: ['Ryan Reynold, Joe Burrow, Matthew Mcconaughey', 'Megan Fox, Taylor Swift, Jennifer Aniston', 'Angelina Jolie, Blake Lively, Sabrina Carpenter'],
    endOfGame: ['Thank you for playing!', 'Have a great day!', 'Play again sometime!']
}

//A function for getting a random number 
function randomElement(){
    return Math.floor(Math.random()* 3);
}

// the main function
function messageGame(){
    //creating a variable to store a random game from the gameOptions array
    const newGame = gameObject.gameOptions[randomElement()];
    //switch case 
    let newQuestion;
    switch(newGame){
        case 'Never have I ever':
            newQuestion = gameObject.optionOne[randomElement()];
            break;
        case 'Would you rather':
            newQuestion = gameObject.optionTwo[randomElement()];
            break;
        case 'Kiss, Marry, Kill':
            newQuestion = gameObject.optionThree[randomElement()];
            break;
    }
    //Getting the last part of the string
    const finalMessage = gameObject.endOfGame[randomElement()];

    //loging the varables in a good format
    console.log(`The game that you are going to be playing is ${newGame}. Your Question is ${newGame} ${newQuestion}. ${finalMessage}`);
}

messageGame();