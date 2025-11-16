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

    document.getElementById("input-box").addEventListener("submit", function (e) {
        e.preventDefault();
        let nameField = document.getElementById("fullname");
        let nameError = nameField.nextElementSibling;

        if (nameField.value.trim() === "") {
            nameField.classList.add("error-border");
            nameError.style.display = "block";
        } else {
            nameField.classList.remove("error-border");
            nameError.style.display = "none";
        }
    })