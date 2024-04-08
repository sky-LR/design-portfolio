(function(){
    "use strict";
    console.log("reading lazyBG js");
    
    if ('IntersectionObserver' in window) {
        document.addEventListener("DOMContentLoaded", function() {
      
          //Lazy loading for BG images
          const bgImageDivs = document.querySelectorAll(".article-image");
          const observer = new IntersectionObserver(
            handleLazyLoad,
            { rootMargin: "100px" }
          );
          bgImageDivs.forEach(bgImageDiv => observer.observe(bgImageDiv));

          function handleLazyLoad(entries) {
            entries.map((entry) => {
              if (entry.isIntersecting) {
                // Item has crossed our observation
                // threshold - load src from data-src
                entry.target.style.backgroundImage = "url('"+entry.target.dataset.bgimage+"')";
                // Job done for this item - no need to watch it!
                observer.unobserve(entry.target);
              }
            });
          }

          //scrolling movement
          const articles = document.querySelectorAll('article');
          const articleObserver = new IntersectionObserver(
            handleScrollInteraction,
            { rootMargin: "10px" }
          );
          articles.forEach(article => articleObserver.observe(article));

          function handleScrollInteraction(entries) {
            entries.map((entry) => {
              
              if (entry.isIntersecting) {
                entry.target.style.transform = "translate(0px, 0px)";
                entry.target.style.opacity = "1";
                articleObserver.unobserve(entry.target);
              }
            });
          }


        });
      } else {
        // No interaction support? Load all background images automatically
        const bgImageDivs = document.querySelectorAll(".article-image");
        bgImageDivs.forEach(bgImageDiv => {
            bgImageDiv.style.backgroundImage = "url('"+bgImageDiv.dataset.bgimage+"')";
        });
    }

}());