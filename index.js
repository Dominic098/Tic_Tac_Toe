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
   }
}                                 
