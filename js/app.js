console.log("sanity check")
/*-------------------------------- Constants --------------------------------*/
const snake = {
  head: 18,
  body: [],
}

const apple = {
  location: 2,
}

const walls = {
rWall: [5, 11, 17, 23, 29, 35],
lWall: [0, 6, 12, 18, 24, 30],
bWall: [30, 31, 32, 33, 34, 35],
tWall: [0, 1, 2, 3, 4, 5],
}
console.log(walls.rWall)

// rWall = [5, 11, 17, 23, 29, 35]
// lWall = [0, 6, 12, 18, 24, 30]
// bWall = [30, 31, 32, 33, 34, 35]
// tWall = [0, 1, 2, 3, 4, 5]

/*---------------------------- Variables (state) ----------------------------*/

let timer
let boardSqsArray = []
let keyToNumber = null



/*------------------------ Cached Element References ------------------------*/

const keyboard = document.querySelector(".keyboard")


const boardSqs = document.querySelectorAll(".sqr") 

/*----------------------------- Event Listeners -----------------------------*/

keyboard.addEventListener("keydown", moveHead)

/*-------------------------------- Functions --------------------------------*/

//create a function that takes the index and assigns that index number as a value to that square
boardSqs.forEach(function(sqr, index){
  const num = null
  // sqr = num
  
  
})
// console.log(boardSqsArray)

// console.log(boardSqs)

// console.log(boardSqsValue())

function init(event){
  boardSqs[snake.head].textContent = "x"
  
}
// boardSqs[18].textContent = "x"
//   console.log(parseInt((boardSqs[18].id.replace("sq", ""))) + 3) //now i need to convert back into an index after changing the input
  

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
    sqr.textContent = "x"
  }else{
    sqr.textContent = ""
  }
  
})
}










// function updateBoard(){
//   console.log(boardSqsArray)
  
//   boardSqsArray.forEach(function(sqr, index){
//     if(sqr === null){
//       boardSqs[index].textContent = "o"
//     }else if (sqr === 1){
//       boardSqs[index].textContent = "x"
//     }else if (sqr === 2){
//       boardSqs[index].textContent = "a"
//     }
//   })
// }

// console.log(updateBoard())
function start(direction){
  if(direction === -6)
  timer = setInterval(function(){
  snake.head -= 6
  console.log(snake.head)
  checkForWall()
  updateBoard()
  console.log(timer)
  }, 1000)
  if(direction === 6)
  timer = setInterval(function(){
  snake.head += 6
  console.log(snake.head)
  checkForWall()
  updateBoard()
  console.log(timer)
  }, 1000)
  if(direction === -1)
  timer = setInterval(function(){
  snake.head -= 1
  console.log(snake.head)
  checkForWall()
  updateBoard()
  console.log(timer)
  }, 1000)
  if(direction === 1)
  timer = setInterval(function(){
  snake.head += 1
  console.log(snake.head)
  checkForWall()
  updateBoard()
  console.log(timer)
  }, 1000)
  
}

function moveHead(event){
  let userKey = event.key.toLowerCase()
  
  // console.log(keyToNumber)
  if(userKey === "w"){
    // console.log("-5")
    //keyToNumber = -6
    clearInterval(timer)
    snake.head = snake.head - 6
    start(-6)
    //boardSqs[index] = (boardSqs[index].id.replace("sq", ""))) - 6 
    
  //need to shift the boardSqs[] -6
  }else if(userKey === "s"){
    // console.log("+5")
    // keyToNumber = 6
    clearInterval(timer)
    snake.head = snake.head + 6
    start(6)
    //boardSqs[index] = (boardSqs[index].id.replace("sq", ""))) + 6 
    //need to shift the boardSqs[] +6
  }else if(userKey === "d"){
    // console.log("+1")
    // keyToNumber = 1
    clearInterval(timer)
    snake.head = snake.head + 1
    start(1)
    //boardSqs[index] = (boardSqs[index].id.replace("sq", ""))) + 1
    //need to shift the boardSqs[] +1
  }else if(userKey === "a"){
    // console.log("-1")
    // keyToNumber = -1
    clearInterval(timer)
    snake.head = snake.head - 1
    start(-1)
    
  } 
  updateBoard()
  start(userKey)
  //console.log(boardSqs[((boardSqs[index].id.replace("sq", ""))) - keyToNumber])
}
function checkForWall(){
  if(snake.head >= 35 || snake.head <= 0){
    clearInterval(timer)
  }
}

//0  1  2  3  4  5
//6  7  8  9  10 11
//12 13 14 15 16 17
//18 19 20 21 22 23
//24 25 26 27 28 29
//30 31 32 33 34 35
// //maybe includes
init()

//made the x move accross the screen by pop() last value storing it as a variable and then unshifting that variable while running update board after time interval