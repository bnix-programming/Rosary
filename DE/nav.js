
window.onscroll = function () { navStick() };

/*Begin nav declarations*/
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
/*End nav declarations*/

/*Begin nav function calls*/
function navStick() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}
/*End nav function calls*/