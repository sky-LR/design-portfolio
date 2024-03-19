(function(){
    "use strict";
    console.log("reading smoothScroll js");

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(eachLink => {
        eachLink.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event){
        event.preventDefault();

        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);

        console.log(targetAnchor.getBoundingClientRect().top);

        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);
        window.scrollBy({top: originalTop - 70, left:0, behavior: 'smooth'});
    }
 
}());