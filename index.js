function valid() {
    let Usernum = document.getElementById("number").value;
    var numercheck = /^[6789][0-9]{9}$/;
    if (numercheck.test(Usernum)) {
      document.getElementById("number-error").innerHTML = "";
      return true;
    } else {
      document.getElementById("number-error").innerHTML =
        "number is in valid";
        return false;
    }
  }