(function() {
    emailjs.init("user_MqFz1y2su2tiLyfQy2Ii4");
    })();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        //
        let params = {
            "from_name": "landing page template",
            "name" : document.getElementById("name").value,
            "phone" : document.getElementById('phone').value,
            "email" : document.getElementById("email").value,
            "message" : document.getElementById('email-body').value
        };
        
        emailjs.send('service_yk01ayi', 'template_9o5y1ka', params)
            .then(function() {
                let element = document.getElementById("message");
                element.setAttribute("class", "message");
                element.innerHTML = "Your email has been send successfully";
                element.style.backgroundColor = "green";
                console.log('SUCCESS!');
            }, function(error) {
                let element = document.getElementById("message");
                element.setAttribute("class", "message");
                element.innerHTML = "An error has occured !";
                element.style.backgroundColor = "red";
                console.log('FAILED...', error);
            });
    });
}