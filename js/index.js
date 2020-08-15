window.onload = function(e) {
  const registerButton = document.querySelector('#register-btn');

  registerButton.onclick = function() {
    const emailInput = document.querySelector('#register-input');
    const email = emailInput.value;
    console.log(email);

    fetch("server/register_email.php", {
      method: 'POST',
      headers: { "Content-Type": "text/plain" },
      body: email,
    })
    .then(function(result) {
      console.log(result.json());
    });
  };
}
