const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");
const zip = document.getElementById("zip");
console.log(pass1, pass2);

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  checkConfirmation();
  //safePassword();
  //goodPassword();
});

function checkConfirmation() {
  if (pass1.value == pass2.value) {
    pass2.setCustomValidity("");
  } else {
    pass2.setCustomValidity("Passwörter stimmen nicht überein");
  }
  return;
}

/*function safePassword() {
  if (pass1.value.split("").includes(Number)) {
    return;
  } else {
    pass1.setCustomValidity("Benutze min. 1 Zahl");
  }
}*/

/*function goodPassword() {
  if (pass1.value === "hallo" || "hallo1234" || "passwort") {
    pass1.setCustomValidity("Das Passwort ist leicht zu erraten");
  } else return;
}*/
