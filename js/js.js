let something = document.getElementById("introimg");
console.log("The variable something is linking to ", something);

const soundOne = new Audio("../sounds/sound1.mp3");
// console.log("The variable earthHum is linking to ", earthHum);

const click = document.getElementById("click");
// console.log("Clicketh ", click);

click.onclick = () => {
    if (soundOne.paused){
        click.innerHTML = "Click me to pause";
        soundOne.play();
    } else {
        click.innerHTML = "Click me to play";
        soundOne.pause();
    }
}