//Global Variables
var TwoDpositionAttributeLocation = gl.getAttribLocation(TwoDprogram, "a_position"); //Look up the attribute for position in the program
var positionBuffer = gl.createBuffer();
var TwoDcolorUniformLocation = gl.getUniformLocation(TwoDprogram, "u_color");
var ThreeDpositionAttributeLocation = gl.getAttribLocation(ThreeDprogram, "a_position"); //Look up the attribute for position in the program
var ThreeDcolorUniformLocation = gl.getUniformLocation(ThreeDprogram, "u_color");
Setup(); //Run Setup function, which runs everything else