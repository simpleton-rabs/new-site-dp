// js.js
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circles');
    
    // Add click handlers
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Add your navigation logic here
            console.log(`Navigating to ${circle.textContent}`);
        });
        
        // Add keyboard navigation
        circle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                circle.click();
            }
        });
    });

    // Speaker sound toggle
    const speaker = document.getElementById('speaker');
    if (speaker) {
        speaker.addEventListener('click', () => {
            speaker.src = speaker.src.includes('speakeron') ? 
                'menuimg/speakeroff.png' : 'menuimg/speakeron.png';
        });
    }
});