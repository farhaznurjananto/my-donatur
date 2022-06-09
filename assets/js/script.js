// SHOW PASSWORD
function togglePassword() {
  const pw = document.getElementById("password");
  if (pw.type === "password") {
    pw.type = "text";
  } else {
    pw.type = "password";
  }
}

// NAVBAR RESPONSIVE
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
