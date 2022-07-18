// user is playing x, computer is playing o
//when user clicks a box, that box will show x, also, the computer will select a random different box to turn to o
// when there are 3 of x or o consecutively, the game ends and a winner is decided
// need a way to show what the user and computer clicked
// need a random number generator
console.log("ding")
var turn = "X";

document.querySelector("button").addEventListener("click", function(event) {
    let tiles = document.querySelectorAll(".tile");
   for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    tile.textContent = "";
   }
})

document.querySelector("#board").addEventListener("click", function(event){
    console.log(event)
    console.log(event.target.className)
    if(event.target.className.includes("tile")){
        console.log("testing")

        if (event.target.textContent === "X" || event.target.textContent === "O") {
            return;

        }

        if (turn === "X") {
            event.target.textContent="X";
            turn = "O";
        }
        else {
            event.target.textContent="O";
            turn = "X";
        }
    }



})
