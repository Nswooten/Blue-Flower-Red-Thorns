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


// rWall = [5, 11, 17, 23, 29, 35]
// lWall = [0, 6, 12, 18, 24, 30]
// bWall = [30, 31, 32, 33, 34, 35]
// tWall = [0, 1, 2, 3, 4, 5]
//0  1  2  3  4  5
//6  7  8  9  10 11
//12 13 14 15 16 17
//18 19 20 21 22 23
//24 25 26 27 28 29
//30 31 32 33 34 35

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

/*----------------------------- Event Listeners -----------------------------*/

// keyboard.addEventListener("keydown", moveHead)
document.addEventListener("keydown", (event)=>{
  moveHead(event.key)
})
/*-------------------------------- Functions --------------------------------*/


function init(event){
  boardSqs[snake.head].textContent = "🦄"
  boardSqs[apple.location].textContent = "🌷"
  snake.body = []

}


function updateSnake(){
  

}

// board = {
//   x1: [null, snake.head, null, null, null],
//   x2: [null, null, null, null, null],
//   x3: [null, null, null, null, null],
//   x4: [null, null, null, null, null],
//   x5: [null, null, null, null, null],
//   x6: [null, null, null, null, null],
// }


// function initialBoard(){
//   boardSqs.forEach(function(sqr, index){
//   sqr = null
//   console.log(boardSqs[index])
  
// })
// }
// // initialBoard()

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
  // console.log(snake.head)
  updateApple()
  checkForWall(-6)
  dealWithSnakeBody(-6)
  checkForBody()
  updateBoard()
  // console.log(timer)
  }, 300)
  if(direction === 6)
  timer = setInterval(function(){
  snake.head += 6
  // console.log(snake.head)
  updateApple()
  checkForWall(6)
  dealWithSnakeBody(6)
  checkForBody()
  updateBoard()
  // console.log(timer)
  }, 300)
  if(direction === -1)
  timer = setInterval(function(){
  snake.head -= 1
  // console.log(snake.head)
  updateApple()
  checkForWall(-1)
  dealWithSnakeBody(-1)
  checkForBody()  
  updateBoard()
  // console.log(timer)
  }, 300)
  if(direction === 1)
  timer = setInterval(function(){
  snake.head += 1
  // console.log(snake.head)
  updateApple()
  checkForWall(1)
  dealWithSnakeBody(1)
  checkForBody()
  updateBoard()
  // console.log(timer)
  }, 300)
  
}

function moveHead(key){
  // console.log(key)
  
  if(key.toLowerCase() === "w" && currentDirection !== "s" ){
    clearInterval(timer)
    currentDirection = "w"
    console.log(currentDirection)
    // snake.head = snake.head - 6//if i remove this it will fix the ability to move around at your own speed
    start(-6)
  }else if(key.toLowerCase() === "s" && currentDirection !== "w" ){
    clearInterval(timer)
    currentDirection = "s"
    // snake.head = snake.head + 6
    start(6)
    //boardSqs[index] = (boardSqs[index].id.replace("sq", ""))) + 6 
    //need to shift the boardSqs[] +6
  }else if(key.toLowerCase() === "d" && currentDirection !== "a"){
    clearInterval(timer)
    currentDirection = "d"
    // snake.head = snake.head + 1
    start(1)
  }else if(key.toLowerCase() === "a" && currentDirection !== "d"){
    clearInterval(timer)
    currentDirection = "a"
    // snake.head = snake.head - 1
    start(-1)
    
  } 
  console.log(currentDirection)
  
  updateBoard()
  start()
  //console.log(boardSqs[((boardSqs[index].id.replace("sq", ""))) - keyToNumber])
}
function checkForWall(direction){
  if(walls.bWall.includes(snake.head) && direction === 6){
    clearInterval(timer)
    lose = true
  }else if(walls.rWall.includes(snake.head) && direction === 1){
    clearInterval(timer)
    lose = true
  }else if(walls.tWall.includes(snake.head) && direction === -6){
    clearInterval(timer)
    lose = true
  }else if(walls.lWall.includes(snake.head) && direction === -1){
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
    userMsg.textContent = "You lose"
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
  // console.log(snake.body)
  
}



//0  1  2  3  4  5
//6  7  8  9  10 11
//12 13 14 15 16 17
//18 19 20 21 22 23
//24 25 26 27 28 29
//30 31 32 33 34 35
// //maybe includes
init()



//every tick unshift the value of  snake.head  to body array and pop body array
//everytime the snakes head moves take the last position and unshift that value to snakebody array and pop the snake body array