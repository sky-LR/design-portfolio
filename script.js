(function(){
    "use strict";
    console.log("HELLO CURIOUS WEBSITE GOER!");
    console.log("Hopefully, you are my future employer looking to check out my frontend coding skills. This site is built on HTML CSS and vanilla JS all written by yours truly (unless noted otherwise). The most complex and interesting code is probably found in 'textEffect.js' which is a the code for the visual effect at the very top of the home page. ");
    console.log("reading js");


    //Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('nav');
    const navLinks = document.querySelectorAll("nav ul li a");

    if(navBar){
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navBar.classList.toggle("active");
        console.log("clicked menu toggle")
      })
      
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navBar.classList.remove("active");
        })
      })

      //media query bug fix for ham menu
      const mediaQuery = window.matchMedia('(min-width: 600px)')
      function handleTabletChange(e) {
        if (e.matches) {
          hamburger.classList.remove("active");
          navBar.classList.remove("active");
        }
      }
      mediaQuery.addEventListener("change", handleTabletChange);
      handleTabletChange(mediaQuery);
    }
    

    //Contact Sheet
    const body = document.querySelector("body");
    const contactToggles = document.querySelectorAll('.contact-toggle');
    const contact = document.querySelector('#contact');
    const contactSheet = document.querySelector('#contact-bg');

    contactToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        contactSheet.classList.toggle("active");
        contact.classList.toggle("active");
        body.classList.toggle("no-scroll");
        console.log("clicked contact toggle");
      });
    });

  //quicklook tags
    const tags  = document.querySelectorAll(".quick-look ul li");
    tags.forEach(tag => {
      tag.style.color = `var(${tag.dataset.tagcolor})`;
      tag.style.borderColor = `var(${tag.dataset.tagcolor})`;
  });



}());