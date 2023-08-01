/// for dark and light mode localStorage
document.body.classList.add(localStorage.getItem("page") || "dark")
var el = document.querySelectorAll(".color_switch li");
el[1].classList.add("thenightbuton");

if (document.body.className === "light") {
  el[1].style.display = "none";

}
if (document.body.className === "dark") {
  el[0].style.display = "none"
}
el[0].addEventListener("click",
  function () {
    el[0].style.display = "none"
    el[1].style.display = "block"
    document.body.classList.remove("light");
    document.body.classList.add(this.getAttribute("dete_color"));

    localStorage.setItem("page", this.getAttribute("dete_color"))

  }, false
)

el[1].addEventListener("click",
  function () {
    el[1].style.display = "none"
    el[0].style.display = "block"
    document.body.classList.remove("dark");
    document.body.classList.add(this.getAttribute("dete_color"));
    el[1].classList.add("thenightbuton");
    localStorage.setItem("page", this.getAttribute("dete_color"))


  }, false
)
// js code for xo game
let allFiled = document.querySelectorAll(".field");
let end = document.querySelector(".end")
let endGame = document.querySelector("#endGame")
let trun = "x";


allFiled.forEach((div,inedx) => {
  div.addEventListener("click",() => {
    if (trun=="x" && div.innerHTML==""){
      div.innerHTML=trun;
      trun = "o";
      check();
    }else if (trun=="o" && div.innerHTML==""){
      div.innerHTML=trun;
      trun = "x";
      check();
    }
  })
});
/// 
function gameOver(inedx) {
  end.style.transform="translateY(0)";
  swal({
    title: "Good job",
    text: `The winner is ${allFiled[inedx].innerHTML}`,
    button: "Aww yiss!",
  });
}
/// check function to determine whether the game is over
function check(){
  if(allFiled[0].innerHTML== allFiled[1].innerHTML && allFiled[1].innerHTML== allFiled[2].innerHTML&& allFiled[0].innerHTML!=""){
    gameOver(0)
  }
  else if(allFiled[3].innerHTML== allFiled[4].innerHTML && allFiled[3].innerHTML== allFiled[5].innerHTML&& allFiled[3].innerHTML!=""){
    gameOver(3)
  }
  else if(allFiled[6].innerHTML== allFiled[7].innerHTML && allFiled[7].innerHTML== allFiled[8].innerHTML&& allFiled[6].innerHTML!=""){
    gameOver(6)
  }
  else if(allFiled[0].innerHTML== allFiled[4].innerHTML && allFiled[8].innerHTML== allFiled[4].innerHTML&& allFiled[0].innerHTML!=""){
    gameOver(0)
    
  }
  else if(allFiled[2].innerHTML== allFiled[4].innerHTML && allFiled[2].innerHTML== allFiled[6].innerHTML&& allFiled[2].innerHTML!=""){
    gameOver(2)
    
  }
  
  else if(allFiled[0].innerHTML== allFiled[3].innerHTML && allFiled[6].innerHTML== allFiled[0].innerHTML&& allFiled[0].innerHTML!=""){
    gameOver(0)
  }
  else if(allFiled[1].innerHTML== allFiled[4].innerHTML && allFiled[4].innerHTML== allFiled[7].innerHTML&& allFiled[1].innerHTML!=""){
    gameOver(1)
    
  }
  else if(allFiled[2].innerHTML== allFiled[5].innerHTML && allFiled[2].innerHTML== allFiled[8].innerHTML&& allFiled[2].innerHTML!=""){
    gameOver(2)
    
  }
}
endGame.addEventListener("click", function() {
  location.reload();
})