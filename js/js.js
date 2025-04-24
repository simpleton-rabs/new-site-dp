let something = document.getElementById("introimg");
console.log("The variable something is linking to ", something);

const earthHum = new Audio("../sound/earthhum.mp3");
// console.log("The variable earthHum is linking to ", earthHum);

const click = document.getElementById("click");
// console.log("Clicketh ", click);

click.onclick = () => {
    if (earthHum.paused){
        click.innerHTML = "Click me to pause";
        earthHum.play();
    } else {
        click.innerHTML = "Click me to play";
        earthHum.pause();
    }
}