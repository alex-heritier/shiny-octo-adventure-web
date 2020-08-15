window.onload = function(e) {
  const registerButton = document.querySelector('#register-btn');
  registerButton.onclick = function() {
    const emailInput = document.querySelector('#register-input');
    console.log(emailInput.value);
  };
}
