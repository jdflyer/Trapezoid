function DrawTriangle(Verticies,Color){
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Verticies), gl.STATIC_DRAW);
    gl.useProgram(TwoDprogram);
    gl.enableVertexAttribArray(TwoDpositionAttributeLocation);
    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 
    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        TwoDpositionAttributeLocation, size, type, normalize, stride, offset)
    gl.uniform4f(TwoDcolorUniformLocation, Color[0]/255, Color[1]/255, Color[2]/255, Color[3]/255);
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

function DrawTrianglePlane(Verticies,Color){
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Verticies), gl.STATIC_DRAW);
    gl.useProgram(ThreeDprogram);
    gl.enableVertexAttribArray(ThreeDpositionAttributeLocation);
    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 
    var matWorldUniformLocation = gl.getUniformLocation(ThreeDprogram, 'mworld')
    var matViewUniformLocation = gl.getUniformLocation(ThreeDprogram, 'mview')
    var matProjUniformLocation = gl.getUniformLocation(ThreeDprogram, 'mproj')

    var worldMatrix = new Float32Array(16);
    var viewMatrix = new Float32Array(16);
    var projMatrix = new Float32Array(16);
    mat4.identity(worldMatrix);
    mat4.lookAt(viewMatrix,CamPos,LookPos,[0,1,0]); 
    mat4.perspective(projMatrix, glMatrix.toRadian(fovy),canvas.width/canvas.clientHeight,0.1,1000.0);

    gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE,worldMatrix)
    gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE,viewMatrix)
    gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE,projMatrix)

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 3;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(ThreeDpositionAttributeLocation, size, type, normalize, stride, offset)
    gl.uniform4f(ThreeDcolorUniformLocation, Color[0]/255, Color[1]/255, Color[2]/255, Color[3]/255);
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 3;
    

    gl.drawArrays(primitiveType, offset, count);
}

function DrawQuadPlane(Verticies,Color){
    //3 Verticies
    //9 Array Values
    //T1 V1 V2 V3
    //T2 V2 V3 V4
    DrawTrianglePlane([Verticies[0], Verticies[1],Verticies[2], Verticies[3],Verticies[4],Verticies[5],Verticies[6],Verticies[7],Verticies[8],],Color);
    DrawTrianglePlane([Verticies[3], Verticies[4],Verticies[5], Verticies[6],Verticies[7],Verticies[8],Verticies[9],Verticies[10],Verticies[11],],Color);
}

function DrawCube(Verticies, Color){
    //[X,Y,Z,Length,Width,Height]
    DrawQuadPlane([X,  Y,Z,-1,  1,0,1,-1, 0,-1,-1, 0,],Color);
}