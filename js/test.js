var loc = 0;
var total = 2;
console.log("Stas")

document.onload = function (e) {
    const navlines = this.document.getElementsByClassName("navline")
    for (let n = 0; n < navlines.length; n++) {
        if (n != 0) {
            navlines[n].getElementsByClassName("vr")[0].style.height = "2em";
        }
    }
}

window.addEventListener("scroll", function () {

    // document.getElementsByClassName("section").forEach(function(elementTarget){
    //     console.log(elementTarget)
    // });

    const elems = document.getElementsByClassName("section");
    const indicators = document.getElementsByClassName("sideindicator");
    for (let i = 0; i < elems.length; i++) {
        var elementTarget = elems[i]
        if (window.scrollY > (elementTarget.getBoundingClientRect().top) && window.scrollY < (elementTarget.getBoundingClientRect().bottom)) {
            const navlines = this.document.getElementsByClassName("navline")
            for (let n = 0; n < navlines.length; n++) {
                if (n != i) {
                    navlines[n].getElementsByClassName("vr")[0].style.height = "2em";
                    if (navlines[n].getElementsByClassName("nav-link").length > 0) {
                        navlines[n].getElementsByClassName("nav-link")[0].classList.remove("fs-5")
                    }
                } else {
                    if (navlines[n].getElementsByClassName("nav-link").length > 0) {
                        navlines[n].getElementsByClassName("nav-link")[0].classList.add("fs-5")
                    }
                    navlines[n].getElementsByClassName("vr")[0].style.height = "4em";
                }
            }
        }
    }

});
