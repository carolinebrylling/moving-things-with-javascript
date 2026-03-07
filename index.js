// Your code here

"use strict";

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#d83f96";

dodger.style.bottom = "180px";

dodger.style.left = "180px";


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
       moveDodgeLeft ()
  }

  if (e.key === "ArrowRight") {
      moveDodgeRight ()
  }

  if (e.key === "ArrowUp") {
      moveDodgerUp ();
  }

  if (e.key === "ArrowDown") {
      moveDodgerDown();
  
  }
});

function moveDodgerDown () {
   playSoundOnMovement();
  const bottomNumbers = dodger.style.bottom.replace("px", ""); // unchanged
  let bottom = parseInt(bottomNumbers); // unchanged

  if (bottom > 0) {
    bottom = bottom-10;
   dodger.style.bottom = `${bottom}px`};
   
  };

function moveDodgerUp () {
   playSoundOnMovement();
  const bottomNumbers = dodger.style.bottom.replace("px", ""); // unchanged
  let bottom = parseInt(bottomNumbers); // unchanged

  if (bottom <380) {
    bottom = bottom+10;
   dodger.style.bottom = `${bottom}px`};
  };

function moveDodgeLeft () {
   playSoundOnMovement();
  const leftNumbers = dodger.style.left.replace("px", ""); // unchanged
  let left = parseInt(leftNumbers); // unchanged

  if (left >0) {
    left = left-10;
   dodger.style.left = `${left}px`};
  };

  function moveDodgeRight () {
     playSoundOnMovement();
  const leftNumbers = dodger.style.left.replace("px", ""); // unchanged
  let left = parseInt(leftNumbers); // unchanged

  if (left <360) {
    left = left+10;
   dodger.style.left = `${left}px`};
  
  };

  // Nu tilføjer jeg lyd til knappen
const movementSound = document.getElementById("movementSound");
function playSoundOnMovement() {
  movementSound.currentTime = 0;
  movementSound.play();
};






