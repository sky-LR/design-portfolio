(function(){
    "use strict";
    console.log("reading textEffect js");

    // MAKE IT BASED ON THE WHOLE SCREEN

    /////////////////////////////////// CANVAS TEXT EFFECT ///////////////////////////////////

    const canvas = document.querySelector("#interaction");
    const ctx = canvas.getContext("2d", {willReadFrequently: true});
    const body = document.querySelector("body")

    const skyImg = document.querySelector("#sourceSky");
    const skyBlurImg = document.querySelector("#sourceSkyBlur");

    let mouseX = -200;
    let mouseY = -200;
    const maskSize = 250;

    const grdCanvas = document.querySelector("#grdCanvas");
    const grdCtx = grdCanvas.getContext("2d");

    const colorGrd = ctx.createLinearGradient(0, 0, 255, 0);

    colorGrd.addColorStop(1,"rgba(12, 12, 12, 255)");
    colorGrd.addColorStop(0.75,"rgba(12, 12, 12, 255)");
    colorGrd.addColorStop(0.65,"rgba(69, 66, 233, 255)");
    colorGrd.addColorStop(0.52,"rgba(233, 76, 66, 255)");
    colorGrd.addColorStop(0.40,"rgba(250, 197, 61, 255)");
    colorGrd.addColorStop(0.15,"RGBA(244, 241, 239, 255)");
    colorGrd.addColorStop(0,"RGBA(244, 241, 239, 0)");

    // colorGrd.addColorStop(1,"#f7f4f2");
    // colorGrd.addColorStop(0.75,"#f7f4f2");
    // colorGrd.addColorStop(0.65,"rgba(250, 197, 61, 255)");
    // colorGrd.addColorStop(0.52,"rgba(233, 76, 66, 255)");
    // colorGrd.addColorStop(0.40,"rgba(69, 66, 233, 255)");
    // colorGrd.addColorStop(0.15,"rgba(12, 12, 12, 255)");
    // colorGrd.addColorStop(0,"rgba(12, 12, 12, 255)");

    grdCtx.fillStyle = colorGrd;
    grdCtx.rect(0,0,255,10);
    grdCtx.fill();

    const grdImgData = grdCtx.getImageData(0,0,255,1);
    const grdData = grdImgData.data;

    //captures mouse movement
    document.addEventListener("mousemove", function(event){

        mouseX = (event.clientX / window.innerWidth)*canvas.width;
        mouseY = (event.clientY / window.innerHeight)*canvas.height;

        console.log(canvas.width)
        
        requestAnimationFrame(draw);
    })

    //draws to the canvas
    function draw() {

        //resets the canvas and draws the blurry image to it
        ctx.globalCompositeOperation = "source-over";
        ctx.reset();
        ctx.drawImage(skyBlurImg,0,0);

        //creates the radial gradient mask and applys it
        ctx.globalCompositeOperation = "destination-in";
        let grd = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, maskSize);
        grd.addColorStop(0,"RGBA(0,0,0,255)");
        grd.addColorStop(1,"RGBA(0,0,0,0)");
        drawMask(grd);

        gradientMap();

        //draws sharp image to the canvas
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(skyImg,0,0);
    }

    //draws the circle that is filled with the radial gradient mask
    function drawMask(mask){
        ctx.fillStyle = mask;
        ctx.beginPath();
        ctx.arc(mouseX,mouseY,maskSize,0,Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }

    //Assigns colors based on alpha values
    function gradientMap() {

        //reads canvas pixel data
        let myImageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        let data = myImageData.data

        for (var i = 0; i < data.length; i+= 4){
            if (data[i+3] > 5){
                data[i] = grdData[data[i+3]*4];
                data[i+1] = grdData[data[i+3]*4+1];
                data[i+2] = grdData[data[i+3]*4+2];
                data[i+3]=255;
            } else {
                data[i+3]=0;
            }
        }
        

        //writes new colors back onto the canvas
        ctx.putImageData(myImageData,0,0);
    }

    //first call to draw function
    draw();
    
}());