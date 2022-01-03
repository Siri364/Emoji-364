const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");


const openMouthImg = "catc.jpg";
const closeMouthImg = "cato.jpg";


const openMouthSound = new Audio("sound_sound-close.mp3");
const closeMouthSound = new Audio("sound_sound-open.mp3");


btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);


btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})


function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}
