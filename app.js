// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

let openButton = document.querySelector(".modal-btn");
let overlayCheck = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

openButton.addEventListener("click", function(){
    console.log("click");
    if(!overlayCheck.classList.contains("open-modal")) {
        overlayCheck.classList.add("open-modal");
    } else overlayCheck.classList.add("open-modal");
});

closeBtn.addEventListener("click", function() {
    console.log("close");
    overlayCheck.classList.remove("open-modal");
});
