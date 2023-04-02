console.log("sanity check")
/*-------------------------------- Constants --------------------------------*/
const snake = {
  head: 1,
  body: [],
}

const apple = {
  location: 2,
}




/*---------------------------- Variables (state) ----------------------------*/







/*------------------------ Cached Element References ------------------------*/

const keyboard = document.querySelector(".keyboard")


const boardSqs = document.querySelectorAll(".sqr") 



/*----------------------------- Event Listeners -----------------------------*/

keyboard.addEventListener("keydown", moveHead)



boardSqs.forEach(function(index){
  index = null
  console.log(index)
  
})





/*-------------------------------- Functions --------------------------------*/



function init(){
  boardSqs[18].textContent = "x"
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




function updateBoard(){
  boardSqs.forEach(function(sqr, index){
    if(sqr === null){
      boardSqs[index].textContent = "x"
    }else if (sqr === 1){
      boardSqs[index].textContent = "o"
    }else if (sqr === 2){
      boardSqs[index].textContent = "a"
    }
  })
}
updateBoard()
// ,null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

// board.x1.splice(0, 1, snake.head)
// let timer = setInterval(function(){
//   moveHead()
//   updateBoard()
// }, 300)





function moveHead(event){
  let userKey = event.key.toLowerCase()
  let keyToNumber = 0
  // console.log(keyToNumber)
  if(userKey === "w"){
    console.log("-5")
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
console.log(moveHead)


function keyPress(event){
  console.log(event.key)
}
// // moveHead()
init()