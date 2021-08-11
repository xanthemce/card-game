
let playerName1 = prompt('enter your name player 1:')
let randomName = ['john', 'kate', 'hoob', 'randy','diig','jik','apples','orange','daisy','sunny','dandelion']

let randomNumber1 = Math.floor(Math.random() * randomName.length + 0)
let randomNumber2 = Math.floor(Math.random() * randomName.length + 0)

let listRandomName1 = randomName[randomNumber1]

if (playerName1 == ''){
  console.log("Okay I will pick a name for you. Welcome to the game " + listRandomName1)
  randomName.splice(randomNumber1, 1)
}
else (console.log("Welcome to the game " + playerName1))



let listRandomName2 = randomName[randomNumber2]

let playerName2 = prompt('enter your name player 2:')

if (playerName2 == ''){
  console.log("Okay I will pick a name for you. Welcome to the game " + listRandomName2)
  randomName.splice(randomNumber2, 1)
}
else (console.log("Welcome to the game " + playerName2))

let name1 = (playerName1 || listRandomName1)
let name2 = (playerName2 || listRandomName2)





card = ['an ace', 'a 2' , 'a 3' , 'a 4', 'a 5', 'a 6', 'a 7', 'an 8', 'a 9', 'a 10', 'a jack', 'a queen', 'a king']
point1 = 0
point2 = 0
round = 0
card1=0
newCard = 0

 var playRound = prompt('how many rounds would you like to play for?')
while ((isNaN(playRound)) || (playRound < 1) || (playRound == null) || (playRound == ' ') || (playRound % 1 != 0)) {
  console.log('that is not a valid number. please enter a number')
  playRound = prompt('how many rounds would you like to play for?')
}




do{
// number = Math.floor(Math.random() * card.length + 0)
// randomCard = card[number]


number1 = Math.floor(Math.random() * card.length + 0)
randomCard1 = card[number1]
number2 = Math.floor(Math.random() * card.length + 0)
randomCard2 = card[number2]






console.log('the first card is ' + randomCard1)


while(newCard<3){
var swap = prompt('would you like to draw another card? you only get to do this three times. yes or no:')



while(swap!='yes' && swap!='no'){
  console.log('that is not a valid input. please enter yes or no:')
  swap = prompt('would you like to draw another card? yes or no:')
}
if(swap=='yes'){
number1 = Math.floor(Math.random() * card.length + 0)
randomCard1 = card[number1]
console.log('your new card is ' + randomCard1)
newCard++
}
if(swap=='no'){
  break;
}
}
var player1Guess = prompt(name1 + ' guess higher or lower:')

while (player1Guess != 'higher'&& player1Guess!='lower') {
  console.log('that is not a valid guess. please enter higher or lower')
  player1Guess = prompt(name1 + ' guess higher or lower:')
}




var player2Guess = prompt(name2 + ' guess higher or lower:')


while (player2Guess !='higher' && player2Guess!= 'lower') {
  console.log('that is not a valid guess. please enter higher or lower')
  player2Guess = prompt(name2 + ' guess higher or lower:')
}

console.log('the first card was ' + randomCard1 + ' and the second card was ' + randomCard2)


if(number2>number1){
  console.log('it is higher')
  if (player1Guess=='higher'){
    console.log(name1 + ' was right')
    point1++
    }
  else if(player1Guess=='lower'){
    console.log(name1 + ' was wrong')
  }



  if (player2Guess=='higher'){
console.log(name2 + ' was right')
point2++
  }
  else if(player2Guess=='lower'){
    console.log(name2 + ' was wrong')
  }
  
}
else if(number2<number1){
  console.log('it is lower')
  if (player1Guess=='lower'){
    console.log(name1 + ' was right')
    point1++
    }
  else if(player1Guess=='higher'){
    console.log(name1 + ' was wrong')
  }
  if (player2Guess=='lower'){
console.log(name2 + ' was right')
point2++
  }
  else if(player2Guess=='higher'){
    console.log(name2 + ' was wrong')
  }
}

else{
  console.log('it is the same! No one gets a point')

}
round++
}while(round<playRound)



console.log(name1 + ' got ' + point1 + ' points')
console.log(name2 + ' got ' + point2 + ' points')

if(point1>point2){
  console.log(name1 + ' has the most points and is the winner')
}

else if(point1<point2){
  console.log(name2 + ' has the most points and is the winner')
}

else{
  console.log('you got the same amount of points. it is a tie. ')
}