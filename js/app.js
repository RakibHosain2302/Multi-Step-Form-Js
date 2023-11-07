

let formOne = document.querySelector(".formOne");
let formTwo = document.querySelector(".formTwo");
let formThree = document.querySelector(".formThree");

let nextOne = document.querySelector(".nextOne");
let nexttwo = document.querySelector(".nextTwo");
let backOne = document.querySelector(".backOne");
let backTwo = document.querySelector(".backTwo");
let progress = document.querySelector(".progress");
let Btn = document.querySelector(".submit")
let msg = document.querySelector(".msg")


nextOne.addEventListener('click',()=>{
    formOne.style.left ="-450px";
    formTwo.style.left ="-400px";
    progress.style.width = "240px"
  

    
})


backOne.addEventListener('click',()=>{
    formOne.style.left ="40px";
    formTwo.style.left ="40px";
    progress.style.width = "100px"
    
})


nexttwo.addEventListener('click',()=>{
    formTwo.style.left ="-900px";
    formThree.style.left ="-400px";
    progress.style.width = "420px"

    
})


backTwo.addEventListener('click',()=>{
    formThree.style.left ="40px";
    formTwo.style.left ="-400px";
    progress.style.width = "240px"

    
})


Btn.addEventListener('click',() => {
    msg.classList.add("active")


    setTimeout(() => {
        msg.classList.remove("active")
    }, 5000);
} )


