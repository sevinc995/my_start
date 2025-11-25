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
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// form
$(document).ready(function () {

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