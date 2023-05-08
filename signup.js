function validateForm() {
    var regId = document.forms["signupForm"]["regId"].value;
    var username = document.forms["signupForm"]["username"].value;
    var password = document.forms["signupForm"]["password"].value;
    var email = document.forms["signupForm"]["email"].value;
    var mobile = document.forms["signupForm"]["mobile"].value;
    var dob = document.forms["signupForm"]["dob"].value;
  
    // Check if Registration ID is valid
    if (!regId.match(/^[a-zA-Z0-9]+$/)) {
      alert("Registration ID should contain only alphanumeric characters.");
      return false;
    }
  
    // Check if Username is valid
    if (!username.match(/^[a-zA-Z]+$/)) {
      alert("Username should not contain any digits.");
      return false;
    }
  
    // Check if Password is valid
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/)) {
      alert("Password should contain at least one lowercase letter, one uppercase letter, one digit, one special character and minimum length of 8 characters.");
      return false;
    }
  
    // Check if Email is valid
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      alert("Email is not valid.");
      return false;
    }
  
    // Check if Mobile number is valid
    if (!mobile.match(/^\d{10}$/)) {
      alert("Mobile number should contain exactly 10 digits.");
      return false;
    }
  
    // Check if Date of Birth is valid
    if (!dob.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)) {
      alert("Date of Birth should be in DD/MM/YYYY format.");
      return false;
    }
  
    return true;
  }
  