function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }
   
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  var TwoDprogram = createProgram(gl, TwoDvertexShader, TwoDfragmentShader);
  var ThreeDprogram = createProgram(gl, ThreeDvertexShader, ThreeDfragmentShader);