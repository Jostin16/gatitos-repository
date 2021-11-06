const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener('click',()=>{
    window.scrollTo({
       top:0,
       left:0,
       behavior:"smooth" 
    });
});


const audio = document.querySelector("#audio");
audio.play();
