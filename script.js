let boxes=document.querySelectorAll(".Box");
let N=document.querySelector(".new");
let m=document.querySelector(".msg");
let turn0= true;

let pattren= [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [0,4,8],
  [2,4,6],
];

let disabled=()=>{
     for (const box of boxes) {

      box.disabled = true;
      
     }
};
let enable=()=>{
  for (const box of boxes) {

    box.disabled = false;
    box.innerText = "";
   }
}

const game=()=>{
  turn0= true;
  enable();
  m.classList.add("hide");
 


};
boxes.forEach(box=>{
  box.addEventListener("click",()=>{
    if (turn0){
      box.innerText= "O";
turn0 = false;
    }
    else{
      box.innerText= "X";
      turn0 = true;
    }
    box.disabled= true;
    winner();

  });
});
const show= (win)=>{
m.classList.remove("hide");
disabled();

};

const winner= ()=>{

  for (const val of pattren) {
    let pos1= boxes[val[0]].innerText;
    let pos2= boxes[val[1]].innerText;
    let pos3= boxes[val[2]].innerText;
    if(pos1!="" ||pos2!="" ||pos3!=""  ){
      if(pos1==pos2 && pos2==pos3){
        console.log("Winner");
        show();

      }
      
    }

  };
};

N.addEventListener("click", game);
