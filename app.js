const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow--left");
const rightArrow = document.querySelector(".arrow--right");


let counter = 0;

rightArrow.addEventListener("click",()=>{
    slides.forEach(slide =>{
        if(slide.classList.contains("slide--off-right")){
            slide.classList.remove("slide--off-right");
        }
    })
    slides[counter].classList.add("slide--off","slide--off-right");
 
    counter++;
    if(counter > slides.length-1){
        counter = 0;
    }
    slides[counter].classList.remove("slide--off");

})

leftArrow.addEventListener("click",()=>{
    slides.forEach(slide =>{
        if(slide.classList.contains("slide--off")){
            slide.classList.add("slide--off-right");
        }
    })
    slides[counter].classList.add("slide--off");
  
    counter--;
    if(counter < 0){
        counter = slides.length - 1;
    }
    slides[counter].classList.remove("slide--off","slide--off-right");

})