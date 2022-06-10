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

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(`.card-item`, {
  origin: "top",
  interval: 200,
});

sr.reveal(`.home__data, .footer__information`, {
  origin: "left",
});

sr.reveal(`.home__img, .footer__social`, {
  origin: "right",
});

// LOGIN
function login() {
  var user = document.getElementById("uname").value;
  var pass = document.getElementById("password").value;

  // var Blogin = document.getElementById("login");
  // var Bsignup = document.getElementById("signup");
  // var Bprofile = document.getElementById("profile");
  // var Bdashboard = document.getElementById("dashboard");
  // var Blogout = document.getElementById("logout");

  if (user == "user" && pass == "user") {
    window.location.replace("index.html");
  } else {
    alert("Username dan password anda salah!");
  }
}
