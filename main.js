//Global Variables
var positionAttributeLocation = gl.getAttribLocation(program, "a_position"); //Look up the attribute for position in the program
var positionBuffer = gl.createBuffer();
var colorUniformLocation = gl.getUniformLocation(program, "u_color");
Setup(); //Run Setup function, which runs everything else