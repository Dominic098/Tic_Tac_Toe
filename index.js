var turnnum= 1;
var tlb ="";
var tb= "";
var trb = "";
var lb ="";
var mb = "";
var rb = "";
var blb ="";
var bb="";
var brb="";
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
            if (event.target.className.includes("tile topleft")){
                tlb = "X";
            }
            else if (event.target.className.includes("tile topmid")){
                tb = "X";
            }
            else if (event.target.className.includes("tile topright")){
                 trb = "X";
            }
            else if (event.target.className.includes("tile left")){
                lb = "X";
            }
            else if (event.target.className.includes("tile mid")){
                 mb = "X";
            }
            else if (event.target.className.includes("tile right")){
                 rb = "X";
            }
            else if (event.target.className.includes("tile bottomleft")){
                blb = "X";
            }
            else if (event.target.className.includes("tile bottommid")){
                bb = "X";
            }
            else if (event.target.className.includes("tile bottomright")){
                brb = "X";
            }
            turn = "O";
            turnnum ++;
        }
        else {
            event.target.textContent="O";
            if (event.target.className.includes("tile topleft")){
                tlb = "O"
            }
            else if (event.target.className.includes("tile topmid")){
                tb = "O"
            }
            else if (event.target.className.includes("tile topright")){
                trb = "O"
            }
            else if (event.target.className.includes("tile left")){
                 lb = "O"
            }
            else if (event.target.className.includes("tile mid")){
                mb = "O"
            }
            else if (event.target.className.includes("tile right")){
                rb = "O"
            }
            else if (event.target.className.includes("tile bottomleft")){
                blb = "O"
            }
            else if (event.target.className.includes("tile bottommid")){
                bb = "O"
            }
            else if (event.target.className.includes("tile bottomright")){
                brb = "O"
            }
            turn = "X";
            turnnum ++;
        }
    }
    if (tlb==="X"&&tb==="X"&&trb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (tlb==="O"&&tb==="O"&&trb==="O"){
        alert ("X won!")
        history.go(0)
    }
    if (rb==="X"&&lb==="X"&&mb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (rb==="O"&&lb==="O"&&mb==="O"){
        alert ("O won!")
        history.go(0)
    }
    if (blb==="X"&&bb==="X"&&brb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (blb==="O"&&bb==="O"&&brb==="O"){
        alert ("O won!")
        history.go(0)
    }
    if (blb==="X"&&lb==="X"&&tlb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (blb==="O"&&lb==="O"&&tlb==="O"){
        alert ("O won!")
        history.go(0)
    }
    if (tb==="X"&&mb==="X"&&bb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (tb==="O"&&mb==="O"&&bb==="O"){
        alert ("O won!")
        history.go(0)
    }
    if (trb==="X"&&rb==="X"&&brb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (trb==="O"&&rb==="O"&&brb==="O"){
        alert ("O won!")
        history.go(0)
    }
    if (trb==="X"&&mb==="X"&&blb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (trb==="O"&&mb==="O"&&blb==="O"){
        alert ("O won!")
        history.go(0)
    }
    if (tlb==="X"&&mb==="X"&&brb==="X"){
        alert ("X won!")
        history.go(0)
    }
    if (tlb==="O"&&mb==="O"&&brb==="O"){
        alert ("O won!")
        history.go(0)
    }
    else if (turnnum===10){
        alert ("draw")
        history.go(0)
    }
}
)
