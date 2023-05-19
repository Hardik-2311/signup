let username = document.getElementById("name");
let Usernum = document.getElementById("number");
let password = document.getElementById("password");
let email = document.getElementById("email");
let confirmPassword = document.getElementById("password-2");

//function for number
password.addEventListener('input',()=>{
  if(password.value.length >0 && password.value.length<4){
    document.getElementById("password-error").innerHTML = "password is weak";
  }
  else if(password.value.length >=4 && password.value.length<8){
    document.getElementById("password-error").innerHTML = "password is medium";
  }
  else if(password.value.length >=8){
    document.getElementById("password-error").innerHTML = "password is strong";
  }
  
})

function empty() {
  if (username.value === "") {
    document.getElementById("name-error").innerHTML = "Naam to daal bhai!";
  }
  if (Usernum.value == null || Usernum.value === "") {
    document.getElementById("number-error").innerHTML = "Number to daal bhai!";
  }
  if (email.value <= 0) {
    document.getElementById("email-error").innerHTML = "Email Kaun daalega?";
  }
  if (password.value <= 7) {
    document.getElementById("password-error").innerHTML = "Chhota hai brother!";
  }
}

function valid() {
  //regex values
  const numercheck = /^[6789][0-9]{9}$/;//error
  const usercheck = /^^[a-zA-Z]+(\s[a-zA-Z]+)?$/;//specified space between the names
  const passcheck = /^[a-z]{8,10}$/;
  const emailcheck = /^[^ ]+@[a-z]+\.[a-z]{2,6}$/;
  empty();
  //
  if (!usercheck.test(username.value)) {
    document.getElementById("name-error").innerHTML = "Invalid Name";
    return false;
  } else if (!numercheck.test(Usernum.value)) {
    document.getElementById("number-error").innerHTML = "Invalid Number";
    return false;
  } else if (!emailcheck.test(email.value)) {
    document.getElementById("email-error").innerHTML = "Invalid Email";
    return false;
  } else if (!passcheck.test(password.value)) {
    document.getElementById("password-error").innerHTML = "Invalid Password";
    return false;
  } else if (!confirmPassword.value.match(password.value)) {
    document.getElementById("password-2-error").innerHTML =
      "Password doesnt match";
    return false;
  } else {
    true;
  }
}
