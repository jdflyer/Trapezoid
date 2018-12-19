function DrawTriangle(Verticies,Color){
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Verticies), gl.STATIC_DRAW);
    gl.useProgram(program);
    gl.enableVertexAttribArray(positionAttributeLocation);
    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 
    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
    positionAttributeLocation, size, type, normalize, stride, offset)
    gl.uniform4f(colorUniformLocation, Color[0]/255, Color[1]/255, Color[2]/255, Color[3]/255);
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 3;
    gl.drawArrays(primitiveType, offset, count);

}

function DrawTrapezoidLogo(){
    DrawTriangle([0,  0.5,0.5,  0.5,-0.75, -0.5,],TrapezoidColor);
    DrawTriangle([0.5,  -0.5,0.5,  0.5,-0.75, -0.5,],TrapezoidColor);
}

function DrawQuad(Verticies,Color){
    //4 Verticies
    //8 Array Values
    //T1 V1 V2 V3
    //T2 V2 V3 V4
    DrawTriangle([Verticies[0], Verticies[1],Verticies[2], Verticies[3],Verticies[4],Verticies[5],],[ Color[0], Color[1], Color[2], Color[3]]);
    DrawTriangle([Verticies[2], Verticies[3],Verticies[4], Verticies[5],Verticies[6],Verticies[7],],[ Color[0], Color[1], Color[2], Color[3]]);
}

function DrawRectangle(X,Y,SizeX,SizeY,Color){
    DrawQuad([X,Y,X+SizeX,Y,X,Y-SizeY,X+SizeX,Y-SizeY],Color)
}

function DrawTrianglePlane(){

}