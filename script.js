// Animated bubble execution

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("aside");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 8;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
}) 


// Auto types function

var typed = new Typed(".auto-input", {
    strings: ["Gideon Abiodun", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
}) 



// function changeFontColor() {
//     let button = document.getElementById("btnn"); // access the button by id
//     let color = button.style.color;
//     if (color == "red") { // if button color is red change it green otherwise change it to red.
//        button.style.color = 'green';
//     } else {
//        button.style.color = 'red';
//     }
// }