const zip = document.getElementById("zip");

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");
  checkConfirmation();
  //hasNumber();
  goodPassword();
});

function checkConfirmation() {
  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");

  if (pass1.value === pass2.value) {
    pass2.setCustomValidity("");
  } else {
    pass2.setCustomValidity("Passwörter stimmen nicht überein");
  }
  return;
}

/*function hasNumber() {
  const pass1 = document.getElementById("password1");
  const reg = /\d/;
  const numberCheck = reg.test(pass1);

  if (numberCheck) {
    return;
  } else {
    pass1.setCustomValidity("Benutze min. 1 Zahl");
  }

   if (pass1.value.split("").includes(Number)) {
    return;
  } else {
    pass1.setCustomValidity("Benutze min. 1 Zahl");
  }
  
}*/

function goodPassword() {
  const pass1 = document.getElementById("password1");

  let easy = ["hallo", "hallo1234", "passwort"];
  if (easy.includes(pass1.value)) {
    pass1.setCustomValidity("Das Passwort ist leicht zu erraten");
  } else return;
}
