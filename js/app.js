
const snake = {
  head: 18,
  body: [],
}

const apple = {
  location: 12,
}

const walls = {
  rWall: [11, 23, 35, 47, 59, 71, 83, 95, 107, 119, 131, 143],
  lWall: [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132],
  bWall: [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143],
  tWall: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
}


let timer

let boardSqsArray = []

let lose = false

let currentDirection = null


const keyboard = document.querySelector(".keyboard")

const userMsg = document.getElementById("userMsg")

const resetBtnEl = document.getElementById("btn")

const container = document.getElementById("board")

creatSqrs()
let boardSqs = document.querySelectorAll(".sqr")

document.addEventListener("keydown", function(event){
  moveHead(event.key)
})

resetBtnEl.addEventListener("click", init)

function creatSqrs(){
  for (let i=0; i<= 143; i += 1){
    let square = document.createElement("div")
    square.id = "sq" + i
    square.className = "sqr"
    container.appendChild(square)
  }
}

function init(){
  clearInterval(timer)
  snake.head = 65
  apple.location = 42
  snake.body = []
  lose = false
  currentDirection = null
  updateBoard()
  checkForLoss()
}

function updateBoard(){
  boardSqs.forEach(function(sqr, index){
  if(index === snake.head && lose !== true){
    sqr.textContent = "🦄"
  }else if(index === apple.location){
    sqr.textContent = "🌷"
  }else if(snake.body.includes(index)){
    sqr.textContent = "F"
  }else{
  sqr.textContent = ""
  }
})
}

function start(direction){
  if(direction === -12){
    timer = setInterval(function(){
      snake.head -= 12
      checkForWall(-12)
      dealWithSnakeBody(-12)
      checkForBody()
      updateApple()
      updateBoard()
    }, 300)
  }
  if(direction === 12){
    
    timer = setInterval(function(){
      snake.head += 12
      checkForWall(12)
      dealWithSnakeBody(12)
      checkForBody()
      updateApple()
      updateBoard()
    }, 300)
  }
  if(direction === -1){
    timer = setInterval(function(){
      snake.head -= 1
      checkForWall(-1)
      dealWithSnakeBody(-1)
      checkForBody()  
      updateApple()
      updateBoard()
    }, 300)
  }
  if(direction === 1){
    timer = setInterval(function(){
      snake.head += 1
      checkForWall(1)
      dealWithSnakeBody(1)
      checkForBody()
      updateApple()
      updateBoard()
    }, 300)
  }
}

function moveHead(key){  
  if(key.toLowerCase() === "w" && currentDirection !== "s" && currentDirection !== "w" && lose === false){
    clearInterval(timer)
    currentDirection = "w"
    snake.head = snake.head - 12
    checkForWall(-12)
    start(-12)
    dealWithSnakeBody(-12)
  }else if(key.toLowerCase() === "s" && currentDirection !== "w" && currentDirection !== "s" && lose === false ){
    clearInterval(timer)
    currentDirection = "s"
    snake.head = snake.head + 12
    checkForWall(12)
    start(12)
    dealWithSnakeBody(12)
  }else if(key.toLowerCase() === "d" && currentDirection !== "a" && currentDirection !== "d" && lose === false){
    clearInterval(timer)
    currentDirection = "d"
    snake.head = snake.head + 1
    checkForWall(1)
    start(1)
    dealWithSnakeBody(1)
  }else if(key.toLowerCase() === "a" && currentDirection !== "d" && currentDirection !== "a" && lose === false){
    clearInterval(timer)
    currentDirection = "a"
    snake.head = snake.head - 1
    checkForWall(-1)
    start(-1)
    dealWithSnakeBody(-1)
    
  } 
  updateApple()
  updateBoard()
  checkForLoss()
}

function checkForWall(direction){
  if(walls.bWall.includes(snake.head - 12) && direction === 12){
    clearInterval(timer)
    lose = true
  }else if(walls.rWall.includes(snake.head - 1) && direction === 1){
    clearInterval(timer)
    lose = true
  }else if(walls.tWall.includes(snake.head + 12) && direction === -12){
    clearInterval(timer)
    lose = true
  }else if(walls.lWall.includes(snake.head + 1) && direction === -1){
    clearInterval(timer)
    lose = true
  }
  checkForLoss()
}

function checkForBody(){
  if(snake.body.includes(snake.head)){
    clearInterval(timer)
    lose = true
  }
  checkForLoss()
}

function checkForLoss(){
  if (snake.body.length > 10 && lose === true){
    userMsg.innerHTML = "You saved Shrek! <br> To play again, click 'Reset'. "
    snake.head.textContent = ""
  }else if(lose === true){
    userMsg.innerHTML = "Game Over. <br> To play again, click 'Reset'. "
    snake.head.textContent = ""
  }else{
    userMsg.innerHTML = "Press any of the 'WASD' keys to begin as well as change direction. <br> Have fun!" 
  }
}

function updateApple(){
  if(snake.head === apple.location){
    snake.body.push(apple.location)
    apple.location = Math.floor(Math.random() * 143 + 1)
  }
}

function dealWithSnakeBody(direction){
  snake.body.unshift(snake.head - direction)
  snake.body.pop()  
}

init()

