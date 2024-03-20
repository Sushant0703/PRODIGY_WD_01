const navbar = document.querySelector('.navbar');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode'); 
}

navbar.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        toggleDarkMode();
    }
});
