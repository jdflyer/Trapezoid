  // Vertex shader program

  const TwoDVertexShaderSource = `
  precision mediump float;
  // an attribute will receive data from a buffer
  attribute vec4 a_position;
 
  // all shaders have a main function
  void main() {
 
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    gl_Position = a_position;
  }
`;

const ThreeDVertexShaderSource = `
precision mediump float;
attribute vec4 a_position;
uniform mat4 u_matrix;
uniform mat4 mworld;
uniform mat4 mview;
uniform mat4 mproj;
void main() {
  // Multiply the position by the matrix.
  gl_Position = mproj * mview * mworld * vec4(a_position);
  //Maybe add 1.0 to end of last line as (a_position,1.0)
}
`;


//Fragment shader program
const TwoDFragmentShaderSource = `
// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;

uniform vec4 u_color; //define color variable

void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting
  gl_FragColor = u_color;
}
`;

const ThreeDFragmentShaderSource = `
// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;

uniform vec4 u_color; //define color variable

void main() {
  // gl_FragColor is a special variable a fragment shader
  // is responsible for setting
  gl_FragColor = u_color;
}
`;

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
 
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

var TwoDvertexShader = createShader(gl, gl.VERTEX_SHADER, TwoDVertexShaderSource);
var TwoDfragmentShader = createShader(gl, gl.FRAGMENT_SHADER, TwoDFragmentShaderSource);
var ThreeDvertexShader = createShader(gl, gl.VERTEX_SHADER, ThreeDVertexShaderSource);
var ThreeDfragmentShader = createShader(gl, gl.FRAGMENT_SHADER, ThreeDFragmentShaderSource);