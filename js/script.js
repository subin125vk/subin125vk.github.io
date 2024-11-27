document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('BFC6AQ-CNl_m9L0Lq'); 

    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.warn("No contact form found on the page.");
        return;
    }

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const emailParams = {
            from_name: formData.get('name'),
            to_name: 'Your Name', 
            message: formData.get('message'),
        };

        emailjs.send('service_onynit1', 'template_ywjsr98', emailParams)
            .then(() => {
                alert('Your message has been sent successfully!');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send your message. Please try again later.');
            });
    });
});



function toggleDetails(card) {
    const details = card.querySelector('.project-details');
    const isVisible = details.classList.contains('visible');

    document.querySelectorAll('.project-details').forEach((detail) => {
        detail.classList.remove('visible');
    });

    if (!isVisible) {
        details.classList.add('visible');
    }
}
