function Setup(){
    canvas.width = window.innerWidth; //set canvas to window side
    canvas.height = window.innerHeight;
    if (gl === null) {
        //Check if GL is started
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
      // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    Ready = true;
    MainLoop();

    const buffers = initBuffers(gl);
    drawScene(gl, programInfo, buffers);
}