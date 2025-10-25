"use strict";
$(document).ready(function () {
    let menuList = document.getElementById("menulist")
    menuList.style.maxHeight = "0px";
    function toggleMenu(){
        if(menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "300px";
        }
        else
            menuList.style.maxHeight = "0px"
    }
});