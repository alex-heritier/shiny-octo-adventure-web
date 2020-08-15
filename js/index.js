window.onload = function(e) {
  const registerButton = document.querySelector('#register-btn');

  registerButton.onclick = function() {
    const emailInput = document.querySelector('#register-input');
    const params = `email=${emailInput.value}`;

    fetch("server/register_email.php", {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
      mode: 'no-cors',
    })
    .then(async function(resp) {
      const result = await resp.json();
      console.log(result);

      const resultStatus = document.querySelector('.register-email .result');
      if (result == 1) {
        resultStatus.textContent = "Great, you'll receive an email soon!";
        resultStatus.style = "color: green";
      } else {
        resultStatus.textContent = "Failed to register";
        resultStatus.style = "color: red";
      }
    });
  };
}
