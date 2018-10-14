var view = {
    displayElements     : function () {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] === null) continue;
            arguments[i].style.display = "flex"
        }
    },
    hideElements        : function () {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] === null) continue;
            arguments[i].style.display = "none"
        }
    },
    authorizedUser      : function () {
        const token     = localStorage.getItem("uplfo");
        const user      = controller.decodeToken(token);
        const navMenu   = document.querySelector(".nav-menu");

        navMenu.innerHTML = "<a class='nav-item' id='sign-up'>" + user.name.first + "</a>";
    }
}

var model = {
    uplfo           : document.querySelector("#uplfo").value,
    modalsContainer : document.querySelector("#modals-container"),
    signUpModal     : document.querySelector("#sign-up-modal"),
    signInModal     : document.querySelector("#sign-in-modal"),
    flash           : document.querySelector("#flash"),
    flashContainer  : document.querySelector("#flash-container")
}

var controller  = {
    getProtectedRoute : function (url, callback) {
        const xhr       = new XMLHttpRequest();
        const uplfo     = localStorage.getItem("uplfo");

        xhr.open("GET", "/" + url);
        xhr.setRequestHeader("authorization", uplfo);

        xhr.onreadystatechange = function () {
            xhr.readyState === 4 ? callback(xhr.responseText) : "failed"
        }
        xhr.send();
    },
    setToken            : function () {
        if (model.uplfo.length > 1) {
            localStorage.setItem("uplfo", model.uplfo);
        }
    },
    decodeToken         : function (token) {
        const base64Url = token.split('.')[1];
        const base64    = base64Url.replace(/-/g, '+').replace(/_/g, '/');

        return JSON.parse(window.atob(base64));
    },
    sendAuthHeader      : function (e) {
        console.log(e);
        const xhr       = new XMLHttpRequest();
        const uplfo     = localStorage.getItem("uplfo");

        xhr.open("GET", "/dashboard");
        xhr.setRequestHeader("authorization", uplfo);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                document.querySelector("main").innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    }
}

window.addEventListener("click", function (e) {
    const target        = e.target;

    switch (target.id) {
        case "sign-up":
            view.hideElements(model.signInModal, model.flashContainer);
            view.displayElements(model.modalsContainer, model.signUpModal);
            break;
        case "sign-in":
            view.hideElements(model.flashContainer);
            view.displayElements(model.modalsContainer, model.signInModal)
            break;
        case "modals-container":
            view.hideElements(model.modalsContainer)
            break;
        case "flash-container":
            view.hideElements(model.flashContainer)
            break;
        case "dashboard":
            controller.getProtectedRoute("dashboard");
            break;
        default:
            null
    }
})

controller.setToken();
window.addEventListener("unload",  (e) => {
    console.log(window.location.path);
});
