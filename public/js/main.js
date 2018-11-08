const Elements          = {
    menuIcon            : document.querySelector("#menu-icon"),
    menuLinks           : document.querySelector("#menu-links"),
    contactLink         : document.querySelector("#link-contact-me"),
    contactForm         : document.querySelector("#contact-form"),
    welcomeNote         : document.querySelector("#welcome-note"),
    closeContactFormBtn : document.querySelector("#close-contact-form")
}

const View              = {
    display             : function (element) {
        for (var a = 0; a < arguments.length; a++) {
            arguments[a].style.display = "block";
        }
    },
    hide                : function (element) {
        for (var a = 0; a < arguments.length; a++) {
            arguments[a].style.display = "none";
        }
    }
}

const Controller        = {
    toggleMobileMenu    : function () {
        var state       = 0;

        Elements.menuIcon.onclick = function () {
            if (state === 0) {
                View.display(Elements.menuLinks)
                state = 1;
            }else {
                View.hide(Elements.menuLinks)
                state = 0;
            }
        }

        // addEventListener("click", () => {
        //     if (state === 0) {
        //         View.display(Elements.menuLinks)
        //         state = 1;
        //     }else {
        //         View.hide(Elements.menuLinks)
        //         state = 0;
        //     }
        // }, false);
    },
    displayContactForm  : function () {
        /**
         * When "get-in-touch" button is pressed
         * FOR mobile and tablet: diplay contact form and hide the welcome note
         * FOR larger devices: Just display the form
         */
        var state       = 0;

        // Elements.contactLink.addEventListener("click", () => {
        //     if (document.lastChild.clientWidth < 700 && state === 0) {
        //         View.display(Elements.contactForm);
        //         View.hide(Elements.welcomeNote)
        //     }else {
        //         View.display(Elements.contactForm);
        //     }
        // },false);
        Elements.contactLink.onclick = function () {
            if (document.lastChild.clientWidth < 700 && state === 0) {
                View.display(Elements.contactForm);
                View.hide(Elements.welcomeNote)
            }else {
                View.display(Elements.contactForm);
            }
        }
    },
    closeContactForm    : function () {
        Elements.closeContactFormBtn.addEventListener("click", () => {
            View.hide(Elements.contactForm);
            View.display(Elements.welcomeNote);
        })
    },
    getPortfolio        : function () {
        const xhr       = new XMLHttpRequest();

    }
}

// var state               = 0;

Controller.toggleMobileMenu();
Controller.displayContactForm();
Controller.closeContactForm();
