Selector.getInTouchBtn          = document.querySelector("#get-in-touch"),
Selector.contactForm            = document.querySelector("#contact-form"),
Selector.closeContactFormBtn    = document.querySelector("#close-contact-form"),
Selector.welcomeNote            = document.querySelector("#welcome-note"),
Selector.page                   = document.querySelector("html"),
Selector.nav                    = document.querySelector("nav"),
Selector.mainSection            = document.querySelector("section")

Controller.displayContactForm   = function () {
    /**
     * When "get-in-touch" button is pressed
     * FOR mobile and tablet: diplay contact form and hide the welcome note
     * FOR larger devices: Just display the form
     */
    var state       = 0;

    Selector.getInTouchBtn.addEventListener("click", () => {
        if (document.lastChild.clientWidth < 700 && state === 0) {
            View.display(Selector.contactForm);
            View.hide(Selector.welcomeNote)
        }else {
            View.display(Selector.contactForm);
        }
    },false);
}

Controller.closeContactForm    = function () {
    Selector.closeContactFormBtn.addEventListener("click", () => {
        View.hide(Selector.contactForm);
        View.display(Selector.welcomeNote);
    })
}

Controller.setSectionHeight        = function () {
    const $         = Selector;
    const height    = $.page.clientHeight - $.nav.clientHeight;

    $.mainSection.style.height      = String(height) + "px";
}

document.onresize = Controller.setSectionHeight()
Controller.setSectionHeight();
Controller.displayContactForm();
Controller.closeContactForm();
