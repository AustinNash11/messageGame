
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
    //creating an array to store a random game from the gameOptions array
    const gameArry = [];

    gameArry.push(gameObject.gameOptions[randomElement()]);
    
    //switch case 
    switch(gameArry[0]){
        case 'Never have I ever':
            gameArry.push(gameObject.optionOne[randomElement()]);
            break;
        case 'Would you rather':
            gameArry.push(gameObject.optionTwo[randomElement()]);
            break;
        case 'Kiss, Marry, Kill':
            gameArry.push(gameObject.optionThree[randomElement()]);
            break;
    }
    //Getting the last part of the string
    gameArry.push(gameObject.endOfGame[randomElement()]);

    //loging the varables in a good format
    console.log(`The game that you are going to be playing is ${gameArry[0]}. Your Question is ${gameArry[0]} ${gameArry[1]}. ${gameArry[2]}`);
}

messageGame();