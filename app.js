"use strict";

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function toggleMenu() {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
        menuList.style.maxHeight = "250px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

  
const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input');

// form.addEventListener("keydown", function (e) {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         form.dispatchEvent(new Event("submit"));
//     }
// });

inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
});

function validateField(input) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-message');

    if (input.value.trim() === "") {
        error.style.display = "block";
        input.classList.add("error-border");
        return false
    }

    error.style.display = "none";
    input.classList.remove("error-border");
    return true;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let allValid = true;

    inputs.forEach(input => {
        if (!validataField(input)) {
            allValid = false;
        }
    });

    if (allValid) {
        console.log("Form is Valid!")
    }
})



