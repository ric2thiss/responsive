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
        videoContainer.style.transform = 'translateX(0)';
        videoElement.play();
    });

    videoContainer.addEventListener('click',() => {
        document.body.style.overflowY ="scroll";
        videoElement.pause();
        videoContainer.style.transform = 'translateX(100%)';
    })


     // Function to open the specified modal


     function openModal(target) {
        const modal = document.querySelector(`[data-modal="${target}"]`);
        if (modal) {
            modal.showModal();
            
            document.body.style.overflowY = 'hidden';
        }
    }

    function reOpenLoginModal(e){
        openModal(e);
    }

    // Function to close the currently open modal
    function closeModal() {
        const openModal = document.querySelector('dialog[open]');
        if (openModal) {
            openModal.close();
            document.body.style.overflowY = 'scroll';
        }
    }

    // Add click event listeners to the buttons
    const modalButtons = document.querySelectorAll('[data-target]');
    modalButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-target');
            if (target === 'login' || target === 'signup') {
                closeModal(); // Close any open modal
                openModal(target); // Open the selected modal
            }
        });
    });

    // Add click event listener to close modal on overlay click
    const dialog = document.querySelectorAll("dialog");

    dialog.forEach(dialogs => {
        dialogs.addEventListener("click", (e) => {
        const dialogDimensions = dialogs.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            closeModal();
        }
    });
    });

    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', (e) => {
    // Prevent the click event from propagating to the container
    e.stopPropagation();

    // Display the search container
    searchContainer.style.display = 'block';
    // Disable vertical scrolling on the body
    document.body.style.overflowY = 'hidden';

    // Later, want to enable scrolling again, you can use:
    // document.body.style.overflowY = 'auto';


    // Add a click event listener to the document to close the container when clicking outside
    searchContainer.addEventListener('click', closeSearchContainer);
    });

    // Function to close the search container
    function closeSearchContainer(e) {
    if (e.target !== searchInput) {
        // If the clicked element is not the search input, hide the container
        searchContainer.style.display = 'none';
        document.body.style.overflowY = 'scroll';

        // Remove the click event listener from the document
        document.removeEventListener('click', closeSearchContainer);
    }
    }

    // Prevent the click inside the container from closing it
    searchContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    });


    // Save Data to LocalStorage
    function SaveData(e){
        localStorage.setItem('key',e)
        location.href = './service.html'
    }



    // Preloader
    window.addEventListener('load', function () {
        // Get the preloader element
        const preloader = document.querySelector('.preloader');
    
        // Add a CSS class to trigger the fade-out effect
        preloader.classList.add('fade-out');
    
        // Set a timeout to remove the preloader after the animation is complete
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 5000); // Adjust the duration to match your CSS transition duration
    });
    

    // Faq Sections Js

    // const faqItems = document.querySelectorAll('.faq-item');

    // faqItems.forEach(item => {
    //     const question = item.querySelector('.accord');
    //     const answer = item.querySelector('.faq-details');

    //     question.addEventListener('click', () => {
    //         alert(question.textContent)
    //         if (answer.style.display === 'none' || answer.style.display === '') {
    //             answer.style.display = 'block';
    //         } else {
    //             answer.style.display = 'none';
    //         }
    //     });
    // });

    const faqItems = document.querySelectorAll('.faq-item');
    console.log(faqItems)

    faqItems.forEach(item => {
        item.addEventListener('click',()=>{
            const accord = item.querySelector('.accord')
            const desc = item.querySelector('.faq-details')
            if(desc.style.display === 'block'){
                desc.style.display = 'none';
                accord.classList.remove('text-transform')
            }else if(desc.style.display === 'none' ||desc.style.display === '' ){
                accord.classList.add('text-transform')
                desc.style.display = 'block';
            }

        })
    })

