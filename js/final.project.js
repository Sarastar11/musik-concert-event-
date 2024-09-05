
// Time counter>>>>>>>

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// end time counter 
// ******************************************************************************************

// carusel>>>>
var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 5,
  rewind: true,
  breakpoints: {
      640: {
          perPage: 2,
          gap: '.7rem',
          height: '12rem',
      },
      480: {
          perPage: 1,
          gap: '.7rem',
          height: '12rem',
      },
  },
});
splide.mount();

// slide transition 
[].forEach.call(document.getElementsByClassName("clickSliderimg"), function(el) {
  el.style.transition = 'opacity 4s';
  el.style.opacity = 0.5;
})

// end carusel ****************************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>***
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// form validation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const username = document.getElementById("username");
const email = document.getElementById("email");
let validUsername = false;
let validEmail = false;
const successAlert = document.getElementById("successAlert");
const failAlert = document.getElementById("failAlert");
successAlert.style.display = "none";
failAlert.style.display = "none";
username.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
    let str = username.value;
    if (regex.test(str)) {
        username.classList.remove("is-invalid");
        validUsername = true;
    } else {
        username.classList.add("is-invalid");
        validUsername = false;
    }
});
email.addEventListener("blur", () => {
    let emailHelp = document.getElementById("emailHelp");
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        emailHelp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" id="lockSvg" fill="currentColor" class="bi bi-lock-fill me-1 mb-1" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>We'll <span>never</span> share your email with anyone else.</div>`;
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        emailHelp.innerHTML = ``;
        email.classList.add("is-invalid");
        validEmail = false;
    }
});
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (validEmail && validUsername) {
        successAlert.style.display = "block";
    } else {
        failAlert.style.display = "block";
    }
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// drop down >>>>>>>>>>>>
function myFunction() {
  var x = document.getElementById("navbarWithDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

// Hamburger responsive icon 
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
});