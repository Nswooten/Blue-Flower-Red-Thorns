console.log("sanity check")
/*-------------------------------- Constants --------------------------------*/
const snake = {
  head: 18,
  body: [],
}

const apple = {
  location: 12,
}

const walls = {
rWall: [5, 11, 17, 23, 29, 35],
lWall: [0, 6, 12, 18, 24, 30],
bWall: [30, 31, 32, 33, 34, 35],
tWall: [0, 1, 2, 3, 4, 5],
}

/*---------------------------- Variables (state) ----------------------------*/

let timer
let boardSqsArray = []
let keyToNumber = null
let win = true
let lose = false
let currentDirection = null


/*------------------------ Cached Element References ------------------------*/

const keyboard = document.querySelector(".keyboard")

const userMsg = document.getElementById("userMsg")

const boardSqs = document.querySelectorAll(".sqr") 

const resetBtnEl = document.getElementById("btn")


/*----------------------------- Event Listeners -----------------------------*/

// keyboard.addEventListener("keydown", moveHead)
document.addEventListener("keydown", (event)=>{
  moveHead(event.key)
})

resetBtnEl.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/


function init(){
  snake.head = 20
  apple.location = 9
  snake.body = []
  lose = false
  currentDirection = null
  updateBoard()
  checkForLoss()
}


function updateSnake(){
  

}

function updateBoard(){
  boardSqs.forEach(function(sqr, index){
  if(index === snake.head){
    sqr.textContent = "🦄"
  }else if(index === apple.location){
    sqr.textContent = "🌷"
  }else if(snake.body.includes(index)){
    sqr.textContent = "o"
  }else{
  sqr.textContent = ""
  }
})
}

function start(direction){
  if(direction === -6)
  timer = setInterval(function(){
    snake.head -= 6
    checkForWall(-6)
    dealWithSnakeBody(-6)
    checkForBody()
    updateApple()
    updateBoard()
  }, 300)
  if(direction === 6)

  timer = setInterval(function(){
    snake.head += 6
    checkForWall(6)
    dealWithSnakeBody(6)
    checkForBody()
    updateApple()
    updateBoard()
  }, 300)
  if(direction === -1)

  timer = setInterval(function(){
    snake.head -= 1
    checkForWall(-1)
    dealWithSnakeBody(-1)
    checkForBody()  
    updateApple()
    updateBoard()
  }, 300)
  if(direction === 1)

  timer = setInterval(function(){
    snake.head += 1
    checkForWall(1)
    dealWithSnakeBody(1)
    checkForBody()
    updateApple()
    updateBoard()
  }, 300)
  
}

function moveHead(key){  
  if(key.toLowerCase() === "w" && currentDirection !== "s" && currentDirection !== "w" && lose === false){
    clearInterval(timer)
    currentDirection = "w"
    snake.head = snake.head - 6
    checkForWall(-6)
    start(-6)
    dealWithSnakeBody(-6)

  }else if(key.toLowerCase() === "s" && currentDirection !== "w" && currentDirection !== "s" && lose === false ){
    clearInterval(timer)
    currentDirection = "s"
    snake.head = snake.head + 6
    checkForWall(6)
    start(6)
    dealWithSnakeBody(6)
    //boardSqs[index] = (boardSqs[index].id.replace("sq", ""))) + 6 
    //need to shift the boardSqs[] +6
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
}
function checkForWall(direction){
  if(walls.bWall.includes(snake.head - 6) && direction === 6){
    clearInterval(timer)
    lose = true
  }else if(walls.rWall.includes(snake.head - 1) && direction === 1){
    clearInterval(timer)
    lose = true
  }else if(walls.tWall.includes(snake.head + 6) && direction === -6){
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
}
function checkForLoss(){
  if (lose === true){
    userMsg.innerHTML = "Game Over. <br> To play again, click 'Reset' "
  }else{
    userMsg.textContent = "Press any of the 'WASD' keys to begin"
  }
}

function updateApple(){
  if(snake.head === apple.location){
    snake.body.push(apple.location)
    apple.location = Math.floor(Math.random() * 35 + 1)
    //remember to address the apple spawn issue
  }
}

function dealWithSnakeBody(direction){
  snake.body.unshift(snake.head - direction)
  snake.body.pop()  
}

init()
