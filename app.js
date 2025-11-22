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

// images
let modal = document.getElementById("ïmgModal");
let modalImg = document.getElementById("modalImg");
let closeBtn = document.querySelector(".close");
let images = document.querySelectorAll(".portfolio-img");

images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (e){
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// form
$(document).ready(function() {

    const form = $('#contact-form')[0];
    const inputs = $('#contact-form input');

    function validateField(input) {
        const parent = $(input).closest('.input-box');
        const error = parent.find('.error-message');

        if (!$(input).val().trim()) {
            error.show();
            $(input).addClass("error-border");
            return false;
        }

        error.hide();
        $(input).removeClass("error-border");
        return true;
    }

    // Blur event
    inputs.on('blur', function () {
        validateField(this);
    });

    // ENTER — yalnız aktiv input-u yoxla və növbətiyə keç
    $(document).on("keyup", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();

            let active = document.activeElement;
            let index = inputs.index(active);

            if (index !== -1) {
                let isValid = validateField(active);

                if (isValid && inputs[index + 1]) {
                    inputs[index + 1].focus();
                }
            }
        }
    });

    // SUBMIT — bütün input-ları yoxla
    $('#contact-form').on("submit", function (e) {
        e.preventDefault();

        let allValid = true;

        inputs.each(function () {
            if (!validateField(this)) {
                allValid = false;
            }
        });

        if (allValid) {
            console.log("Form is valid!");
        }
    });

});