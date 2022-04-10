

validateEmail = () => {
  const mail = document.getElementById("email").value;
  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+.([a-z]+)?$/;

  if (regex.test(mail)) {
    return regex.test(mail);
  } else {
  document.getElementById("error1").innerHTML="please enter a valid mobile"
  }

};


validateMobile = () => {
  const phone = document.getElementById("mobile").value;
  const regex = /^\d{10}$/;
  if (regex.test(phone)) {
    return true;
  } else {
    // alert('please enter a valid mobile number');
  document.getElementById("error2").innerHTML = "please enter a valid mobile"
  return false;
  }
};
validateDestination = () => {
  // const destination = document.getElementById(".destin").value;
  // const origin = document.getElementById(".orig").value;
  // // const defaultDest = document.getElementById("defaultLocation")
  if (destination.value === origin.value){
  document.getElementById("error3").innerHTML = "your destination should be different to origin";
  }
  // else proceed further
  else {
    return true;
  }
};
validateForm = () => {
  

  // alert('hello world');
var emailValid = validateEmail();
var mobileValid = validateMobile();
var destinationValid = validateDestination();
}
