window.onscroll = function() {navbarScrollEffect()};

var navbar = document.getElementsByClassName("topnav")[0];
var sticky = navbar.offsetTop + 50;

function navbarScrollEffect() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.display = "inline";
    } else {
        navbar.classList.remove("sticky");
        navbar.style.display = "none";
    }
}