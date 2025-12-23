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
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.getElementsByClassName("myImg");
var currentIndex = 0;

// şəkilə klik
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = i;
    };
}

// close
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};

// prev
document.querySelector(".prev").onclick = function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
};

// next
document.querySelector(".next").onclick = function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
};


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