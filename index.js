// Landing Page Background Image
const sections = document.querySelectorAll('.section'); // Select sections in the DOM
console.log(sections);
for (let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundImage = `url('./assets/background/${i + 1}.png')`;
    sections[i].style.backgroundSize = "cover"
    sections[i].style.backgroundRepeat = "no-repeat"
    sections[i].style.backgroundPosition = "center"

}

// Video in Hero Section
const videoContainer = document.getElementById('video-Container')
const playButton = document.querySelector('.about-btn')
    const videoElement = document.querySelector('video');
    playButton.addEventListener('click', () => {
        document.body.style.overflowY = "hidden"
        videoContainer.style.display = 'block'
        videoElement.style.left = '50%'
        videoElement.play();
    });

    videoContainer.addEventListener('click',() => {
        document.body.style.overflowY ="scroll";
        videoElement.pause();
        videoContainer.style.display = "none"
    })