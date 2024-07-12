
let boxes=document.querySelectorAll(".box")
let reset_btn=document.querySelector("#reset_btn")
let new_game=document.querySelector("#new_game")
let msg_container = document.querySelector(".msg_container");
let msg=document.querySelector("#msg")

let turn0=true;  //playerX,player0




const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


// reset_btn event
const reset_game=()=>{
    turn0=true
    enable_boxes()
    msg_container.classList.add("hide")

}
// for Adding X or 0 value to box and dont overwrite it 
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("button is clicked")
        if (turn0){  //player 0
            box.innerText="0"
            turn0=false
        }
        else{ //player X
            box.innerText="X"
            turn0=true
        }
        box.disabled=true

// check winner function
check_winner()

    })
})


const disable_boxes=()=>{
    for (let box of boxes){
        box.disabled=true

    }
}

const enable_boxes=()=>{
    for (let box of boxes){
        box.disabled=false
        box.innerText=""

    }
}

const show_winner=(winner)=>{
    msg.innerText=`Congragulations! ${winner} are the Winner`
    msg_container.classList.remove("hide")
    disable_boxes()
}


check_winner=()=>{
    let isDraw=true
        // we have to check each and every winner pattern in each box
    for (let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // position of each box for giving the winner we go to each index
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])

        pos_val1=boxes[pattern[0]].innerText
        pos_val2=boxes[pattern[1]].innerText
        pos_val3=boxes[pattern[2]].innerText
        // value should to = empty
        if(pos_val1!=""&& pos_val2!=""&& pos_val3!=""){
            // now we check winning pattern is present
            if(pos_val1===pos_val2&&pos_val2===pos_val3){
                // pattren matched
                console.log("winner",pos_val1)
                show_winner(pos_val1)
                
            }
            if (isDraw) {
                msg.innerText = "It's a draw!";
                msg_container.classList.remove("hide");
                disable_boxes(); // Disable all boxes
            }
        }
       

    }
   
}


new_game.addEventListener("click", reset_game); // Assign rest_game function to click event of new_game button
reset_btn.addEventListener("click", reset_game); // Assign rest_btn function to click event of reset_game button




