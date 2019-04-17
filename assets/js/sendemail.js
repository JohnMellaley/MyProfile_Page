function sendMail(contactForm) {
        emailjs.send("gmail", "johnmellaley", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_phone": contactForm.phone.value,
        "project_request": contactForm.projectsummary.value
        
    })
    .then(
        function(response) {
            alert("Your request has been sent", response);
            document.forms['contactform'].reset();
        },
        function(error) {
            alert("Email failed to send", error);
        }
    );
    return false;  // To block from loading a new page
}