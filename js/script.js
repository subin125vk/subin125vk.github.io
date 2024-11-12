document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("BFC6AQ-CNl_m9L0Lq");

    window.onscroll = function () {
        const header = document.querySelector("header");
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (responseMessage) {
                responseMessage.textContent = "Sending...";
            }

            emailjs.sendForm('service_onynit1', 'template_ywjsr98', this)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);

                    if (responseMessage) {
                        responseMessage.textContent = "Message sent successfully!";
                        responseMessage.style.color = "green";
                    }

                    contactForm.reset();
                }, function(error) {
                    console.log("FAILED...", error);

                    if (responseMessage) {
                        responseMessage.textContent = "Message failed to send. Please try again.";
                        responseMessage.style.color = "red";
                    }
                });
        });
    }
});
