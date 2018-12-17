function MainLoop(){
    canvas.width = window.innerWidth; //set canvas to window size
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); //Set the viewport to the window size
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    DrawQuad([TransX,1,TransX+.25,1,TransX,-1,TransX+.25,-1],[1,1,1,1]);
    DrawTrapezoidLogo();
    if (TransX>=1){
        TransX=-1.25;
    }
    TransX = TransX+0.005;
    window.requestAnimationFrame(MainLoop);
}