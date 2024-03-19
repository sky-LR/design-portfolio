(function(){
    "use strict";
    console.log("reading audioPlayer js");
    const playIconContainers = document.querySelectorAll('.play-pause');

    playIconContainers.forEach(playIconContainer => {
        playIconContainer.addEventListener('click', () => {
            if (playIconContainer.dataset.state == 'play'){
                playIconContainer.innerHTML = 'pause';
                playIconContainer.dataset.state = 'pause';
            } else {
                playIconContainer.innerHTML = 'play_arrow';
                playIconContainer.dataset.state = 'play';
            }
        });
    });
}());