// user is playing x, computer is playing o
//when user clicks a box, that box will show x, also, the computer will select a random different box to turn to o
// when there are 3 of x or o consecutively, the game ends and a winner is decided
// need a way to show what the user and computer clikced
// need a random number generator
console.log("ding")
document.addEventListener("click" , function(e){
    console.log(e)
if(e.target.className==="tile"){
    e.target.textContent="x"
}
})