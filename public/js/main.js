(function () {
    const menuIcon      = document.querySelector("#menu-icon");
    const menuLinks     = document.querySelector("#menu-links");
    let state           = 0;


    menuIcon.addEventListener("click", () => {
        if (state === 0) {
            menuLinks.style.display = "flex";
            state = 1;
        }else {
            menuLinks.style.display = "none";
            state = 0;
        }
    }, false)
})()
