function MainLoop(){
    canvas.width = window.innerWidth; //set canvas to window size
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    window.requestAnimationFrame(MainLoop);
}