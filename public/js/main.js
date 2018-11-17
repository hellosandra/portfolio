const Selector          = {
    menuIcon            : document.querySelector("#menu-icon"),
    menuLinks           : document.querySelector("#menu-links")
}

const View              = {
    display             : function () {
        for (var a = 0; a < arguments.length; a++) {
            arguments[a].style.display = "block";
        }
    },
    hide                : function () {
        for (var a = 0; a < arguments.length; a++) {
            arguments[a].style.display = "none";
        }
    }
}

const Controller        = {
    toggleMobileMenu    : function () {
        var state       = 0;

        Selector.menuIcon.addEventListener("click", () => {
            if (state === 0) {
                View.display(Selector.menuLinks)
                state = 1;
            }else {
                View.hide(Selector.menuLinks)
                state = 0;
            }
        }, false);
    }
}

Controller.toggleMobileMenu();
