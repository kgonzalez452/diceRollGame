
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const dieContainer = document.querySelector('.die-container')
const boardContainer = document.querySelector('#board-container')
const die = document.querySelector('#die')
const roll = document.querySelector('#roll')
const tiles = document.querySelectorAll('.tile')
const circle = document.querySelector('#winner-circle')

//game state
let player1Position = 0
let player2Position = 0
let turn = player1