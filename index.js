(function() {
    emailjs.init('fUATr9COJAE9xpWjI'); 

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        // del previous messages
        formMessage.style.display = 'none';
        formMessage.classList.remove('error', 'success');

        // Validate fields
        if (!name || !email || !message) {
            formMessage.textContent = 'All fields are required.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            return;
        }

        // email format and domain
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com'];
        const emailParts = email.split('@');
        const domain = emailParts[1];

        if (!emailPattern.test(email) || !commonDomains.includes(domain)) {
            formMessage.textContent = 'Please enter a valid email address with a recognized domain.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            return;
        }

        // Send email 
        emailjs.send('service_0x1ii2t', 'template_wkp383n', {
            from_name:'SHEKH ALI OMAR',
            name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formMessage.textContent = 'Email sent successfully!';
            formMessage.classList.add('success');
            formMessage.style.display = 'block';

            //del the form fields after sending
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, function(error) {
            console.log('FAILED...', error);
            formMessage.textContent = 'Error sending email. Please try again.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
        });
    });
})();










