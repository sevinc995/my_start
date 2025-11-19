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

    // document.getElementById("contact-form").addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     // fullname
    //     let nameField = document.getElementById("fullname");
    //     let nameError = nameField.nextElementSibling;


    //     if (nameField.value.trim() === "") {
    //         nameField.classList.add("error-border");
    //         nameError.style.display = "block";
    //     } else {
    //         nameField.classList.remove("error-border");
    //         nameError.style.display = "none";
    //     }

    //     // email
    //     let emailField = document.getElementById("email");
    //     let emailError = emailField.nextElementSibling;

    //     if (emailField.value.trim() === "") {
    //         emailField.classList.add("error-border");
    //         emailError.style.display = "block";
    //     } else {
    //         emailField.classList.remove("error-border");
    //         emailError.style.display = "none";
    //     }

    //     // phone
    //     let phoneField = document.getElementById("phone");
    //     let phoneError = phoneField.nextElementSibling;


    //     if (phoneField.value.trim() === "") {
    //         phoneField.classList.add("error-border");
    //         phoneError.style.display = "block";
    //     } else {
    //         phoneField.classList.remove("error-border");
    //         phoneError.style.display = "none";
    //     }
    // })

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    

});