// JavaScript can be added to handle specific functionality if required.
// For example, smooth scrolling to sections when clicking on the navigation links.
// You can use a library like jQuery or write vanilla JavaScript for this purpose.
// Here's an example of smooth scrolling using vanilla JavaScript:

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
