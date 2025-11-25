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
    document.getElementById("myModal").classList.add("active");
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").classList.remove("active");
}

let slideIndex = 1;
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
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = slides.length }
    if (n < 1) { slideIndex = 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}

const portfolioimages = document.querySelectorAll(".portfolio-box .imgbox img")

    portfolioimages.forEach((Img, index) => {
        Img.addEventListener("click", () => {
            openModal();
            currentSlide(index +1);
        })
    });

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