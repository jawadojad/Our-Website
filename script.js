function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.classList.contains('show')) {
        details.classList.remove('show');
    } else {
        details.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Example form submission - replace with actual email sending code
        alert('Form submitted! We will get back to you soon.');

        contactForm.reset();
    });
});
