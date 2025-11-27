"use strict";
// menu
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

let slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
    // document.body.style.overflow = "hidden"; 
    showSlides(slideIndex);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    // document.body.style.overflow = "auto";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i ++)
        slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++ );
        dots[i].classList.remove("active");

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].classList.add("active");
    captionText.innerHTML = dots[slideIndex -1].lastChild;
}

// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") closeModal();
// });

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