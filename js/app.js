console.log("sanity check")
/*-------------------------------- Constants --------------------------------*/
// const snake = {
//   head: boardSqs[18],
//   body: [],
// }

const apple = {
  location: 2,
}




/*---------------------------- Variables (state) ----------------------------*/







/*------------------------ Cached Element References ------------------------*/

const keyboard = document.querySelector(".keyboard")


const boardSqs = document.querySelectorAll(".sqr") 

/*----------------------------- Event Listeners -----------------------------*/

keyboard.addEventListener("keydown", moveHead)

/*-------------------------------- Functions --------------------------------*/

//create a function that takes the index and assigns that index number as a value to that square
const boardSqsValue = boardSqs.forEach(function(sqr, index){
  const num = parseInt(index)
  sqr = num
  return sqr
  
})
console.log(boardSqs)
console.log(boardSqsValue)

// console.log(boardSqsValue())

function init(){
 
  boardSqs[18].textContent = "x"
  console.log(parseInt((boardSqs[18].id.replace("sq", ""))) + 3) //now i need to convert back into an index after changing the input
  
}

function updateBoard(){
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
// initialBoard()

// function updateBoard(){
//   console.log(boardSqs)
  
//   boardSqs.forEach(function(sqr, index){
//     if(sqr === null){
//       boardSqs[index].textContent = "x"
//     }else if (sqr === 1){
//       boardSqs[index].textContent = "o"
//     }else if (sqr === 2){
//       boardSqs[index].textContent = "a"
//     }
//   })
// }

console.log(updateBoard())

// board.x1.splice(0, 1, snake.head)
// let timer = setInterval(function(){
//   moveHead()
//   updateBoard()
// }, 300)
//made the x move accross the screen by pop() last value storing it as a variable and then unshifting that variable while running update board after time interval




function moveHead(event){
  let userKey = event.key.toLowerCase()
  let keyToNumber = 0
  // console.log(keyToNumber)
  if(userKey === "w"){
    // console.log("-5")
    keyToNumber = -6
    
  //need to shift the boardSqs[] -5
  }else if(userKey === "s"){
    // console.log("+5")
    keyToNumber = 6
    
    //need to shift the boardSqs[] +5
  }else if(userKey === "d"){
    // console.log("+1")
    keyToNumber = 1
    
    //need to shift the boardSqs[] +1
  }else if(userKey === "a"){
    // console.log("-1")
    keyToNumber = -1
    
    //need to shift the boardSqs[] -1
  } return console.log(keyToNumber)
}
// console.log(moveHead())


function keyPress(event){
  console.log(event.key)
}
// // moveHead()
init()