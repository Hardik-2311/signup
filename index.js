let username = document.getElementById("name");
let Usernum = document.getElementById("number");
let password = document.getElementById("password");
let email = document.getElementById("email");
let confirmPassword = document.getElementById("password-2");

//function for number

function valid() {
  //regex values
  const numercheck = /^[6-9][0-9]{9}$/;
  const usercheck = /^[a-zA-Z]{2,30}$/;
  const passcheck = /^[a-z]{8,10}$/;
  const emailcheck = /^[^ ]+@[a-z]+\.[a-z]{2,6}$/;

  //
  if (!usercheck.test(username.value)) {
    document.getElementById("name-error").innerHTML = "invalid";
    return false;
  } else if (!numercheck.test(Usernum.value)) {
    document.getElementById("number-error").innerHTML = "invalid";
    return false;
  } else if (!emailcheck.test(email.value)) {
    document.getElementById("email-error").innerHTML = "!!invalid";
    return false;
  } else if (!passcheck.test(password.value)) {
    document.getElementById("password-error").innerHTML = "!!invalid";
    return false;
  } else if (!confirmPassword.value.match(password.value)) {
    document.getElementById("password-2-error").innerHTML = "doesnt match";
    return false;
  } else {
    true;
  }
}
