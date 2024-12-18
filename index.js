(function(){
    emailjs.init("d0fxZTUTFfDUM2_kF");
})();

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'ashishroy'; 
    const templateID = 'template_h18vg4b'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        }, (err) => {
            alert('Failed to send the message. Please try again later.');
            console.error('EmailJS Error:', err);
        });
});