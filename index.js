// Landing Page Background Image
const sections = document.querySelectorAll('.section'); // Select sections in the DOM
console.log(sections);
for (let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundImage = `url('./assets/background/${i + 1}.png')`;
    sections[i].style.backgroundSize = "cover"
    sections[i].style.backgroundRepeat = "no-repeat"
    sections[i].style.backgroundPosition = "center"

}
