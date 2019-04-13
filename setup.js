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

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    Ready = true;
    if(Debug == true){
        FPSMeter.defaults.graph = 1;
        FPSMeter.defaults.heat = 1;
        meter = new FPSMeter(); //Arg1 Element Anchor, Arg2 Options ... http://darsa.in/fpsmeter/
    }
    window.requestAnimationFrame(MainLoop);

    
}