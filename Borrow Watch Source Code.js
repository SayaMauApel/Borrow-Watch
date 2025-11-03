(async () => {

 while (true) {
    let found = false;
const buttons = document.getElementsByClassName("ia-button primary initial");
const DELAY_MS = 300000

for (let button of buttons) {
  if (button.textContent.includes("Borrow")) {
    found = true;
  }
}
const bellSound = new Audio("Input.mp3");

   if (found) {
  bellSound.play();
} }


  if (!found) {
    await new Promise(resolve => setTimeout(resolve, DELAY_MS)); // 5min checkup loop
  } 
})();

// removes the banner
document.getElementById("borrowBanner").onclick = function () {
  this.remove();
};