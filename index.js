
card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
point1 = 0
point2 = 0
round = 0


do{
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
  if (player1Guess=='higher'){
    console.log('player 1 was right')
    point1++
    }
  if (player2Guess=='higher'){
console.log('player 2 was right')
point2++
  }
  
}
else if(randomCard2<randomCard1){
  console.log('it is lower')
  if (player1Guess=='lower'){
    console.log('player 1 was right')
    point1++
    }
  if (player2Guess=='lower'){
console.log('player 2 was right')
point2++
  }
}

else{
  console.log('it is the same! No one gets a point')

}
round++
}while(round<2)

console.log('player 1 got ' + point1 + ' points')
console.log('player 2 got ' + point2 + ' points')

if(point1>point2){
  console.log('player 1 has the most points and is the winner')
}

else if(point1<point2){
  console.log('player 2 has the most points and is the winner')
}

else{
  console.log('you got the same amount of points. it is a tie. ')
}