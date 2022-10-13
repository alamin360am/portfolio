'use strict'

// Night Mode funtionality

    const styleSheet = document.getElementById("stylesheet");
    const lightButton = document.querySelector(".lightButton");
    const darkButton = document.querySelector(".darkButton");

    darkButton.addEventListener("click", function() {
        styleSheet.href = "css/color-2.css"
    });
    lightButton.addEventListener("click", function() {
        styleSheet.href = "css/color-1.css"
    });

    // Menu functionality

    const nav = document.querySelector(".nav"),
          navList = nav.querySelectorAll("li"),
          totalNavList = navList.length;

    const menuController = document.querySelector(".menu-controller");
    const openMenu = document.querySelector(".menu");

    menuController.addEventListener("click", function() {
        menuController.classList.toggle("menu-controller-btn");
        openMenu.classList.toggle("open");
    });

    window.addEventListener("scroll", function() {
        menuController.classList.remove("menu-controller-btn");
        openMenu.classList.remove("open");
    });

    for (let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for (let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active-link");
                console.log(a);
            }
            this.classList.add("active-link");

            menuController.classList.remove("menu-controller-btn");
            openMenu.classList.remove("open");
        });
    }