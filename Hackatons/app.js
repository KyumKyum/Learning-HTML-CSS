const toggleButton = document.querySelector(".toggle_button");
const navigationContents = document.querySelector(".nav_categories");


toggleButton.addEventListener('click', () => {
    console.log("clicked!");
    navigationContents.classList.toggle('active');
});