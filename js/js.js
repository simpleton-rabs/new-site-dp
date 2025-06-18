let something = document.getElementById("introimg");
console.log("The variable something is linking to ", something);

const soundOne = new Audio("../sounds/sound1.mp3");
// console.log("The variable earthHum is linking to ", earthHum);

soundOne.loop = true;

const click = document.getElementById("click");
// console.log("Clicketh ", click);

const speakerIcon = document.getElementById("speaker");
// console.log("Link to speaker ", speakerIcon);

// console.log("Link to speaker ", speakerIcon.src);


// click.onclick = () => {
//     if (soundOne.paused){
//         click.innerHTML = "Click me to pause";
//         soundOne.play();
//     } else {
//         click.innerHTML = "Click me to play";
//         soundOne.pause();
//     }
// }

speakerIcon.onclick = () => {
    if (soundOne.paused){
        // speakerIcon.src = "/menuimg/speakeroff.png"; 

        speakerIcon.src = "../menuimg/speakeroff.png";
        soundOne.play();
        
    } else {
        speakerIcon.src = "../menuimg/speakeron.png";
        soundOne.pause();
    }
}