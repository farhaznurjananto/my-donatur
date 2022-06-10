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

/* DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "bx-toggle-left" : "bx-toggle-right");

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

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

// REGISTER
function register() {
  alert("Berhasil Register!");
}
