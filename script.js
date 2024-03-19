(function(){
    "use strict";
    console.log("HELLO CURIOUS WEBSITE GOER!");
    console.log("Hopefully, you are my future employer looking to check out my frontend coding skills. This site is built on HTML CSS and vanilla JS all written by yours truly (unless noted otherwise). The most complex and interesting code is probably found in 'textEffect.js' which is a the code for the visual effect at the very top of the home page. ");
    console.log("reading js");


    //Hamburger Menu

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll("nav ul li a");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      console.log("clicked menu toggle")
    })
    
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    })
    

    //Contact Sheet

    const contactToggles = document.querySelectorAll('.contact-toggle');
    const contact = document.querySelector('#contact');
    const contactSheet = document.querySelector('#contact-bg');

    contactToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        contactSheet.classList.toggle("active");
        contact.classList.toggle("active");
        console.log("clicked contact toggle")
      });
    });



}());