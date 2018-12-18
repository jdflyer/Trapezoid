function MainLoop(now){
    now = now*0.05;
    var deltatime = now-then;
    console.log(deltatime);
    then=now;
    canvas.width = window.innerWidth; //set canvas to window size
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); //Set the viewport to the window size
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    //DrawQuad([TransX,TransY,TransX+.25,TransY,TransX,TransY-.5,TransX+.25,TransY-.5],[1,1,1,1]);
    DrawRectangle(TransX,TransY,.25,.5,[255,255,255,255])
    DrawTrapezoidLogo();
    if (TransX>1){
        TransX=-1.25;
    }if(TransX<-1.25){
        TransX=1;
    }if (TransY>1.5){
        TransY=-1;
    }if(TransY<-1){
        TransY=1.5;
    }
    if (rightpressed==true){ //If right arrow is pressed
        TransX = TransX+0.005*deltatime;
    }if(leftpressed==true){ //If left arrow is pressed
        TransX = TransX-0.005*deltatime;
    }if (uppressed==true){ //If right arrow is pressed
        TransY = TransY+0.01*deltatime;
    }if(downpressed==true){ //If left arrow is pressed
        TransY = TransY-0.01*deltatime;
    }
    window.requestAnimationFrame(MainLoop);
}