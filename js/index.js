function showRegisterStatus(message, isSuccess) {
  const resultStatus = document.querySelector('.register-email .result');
  resultStatus.textContent = message;
  resultStatus.style = `color: ${isSuccess ? "green" : "red"}`;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

window.onload = function(e) {
  const registerButton = document.querySelector('#register-btn');

  registerButton.onclick = function() {
    const emailInput = document.querySelector('#register-input');
    const rawEmail = emailInput.value;

    // Check for blank email
    if (!rawEmail || rawEmail == "") {
      showRegisterStatus("Value is required", false);
      return;
    }

    // Check for valid email format
    if (!validateEmail(rawEmail)) {
      showRegisterStatus("Invalid email", false);
      return;
    }

    fetch("server/register_email.php", {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${rawEmail}`,
      mode: 'no-cors',
    })
    .then(async function(resp) {
      const result = await resp.json();
      console.log(result);

      if (result == 1) {
        showRegisterStatus("Great, you'll receive an email soon!", true);
      } else {
        showRegisterStatus("Failed to register", false);
      }
    })
    .catch((error) => showRegisterStatus("An error occured", false));
  };
}
