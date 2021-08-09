
card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

number = Math.floor(Math.random() * card.length + 0)
randomCard = card[number]


number1 = Math.floor(Math.random() * card.length + 0)
randomCard1 = card[number1]
number2 = Math.floor(Math.random() * card.length + 0)
randomCard2 = card[number2]

var player1Guess = prompt('player 1 guess higher or lower:')

var player2Guess = prompt('player 2 guess higher or lower:')

if(randomCard2>randomCard1){
  console.log('it is higher')
}
else if(randomCard2<randomCard1){
  console.log('it is lower')
}

else{
  console.log('it is the same!')
}

