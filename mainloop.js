function MainLoop(){
    if (Debug == true){meter.tickStart();}
    LoopFirst();

    Draw3dObjects();

    //Draw2DObjects();
    
    Logic();

    TrapezoidColorChange();

    if (Debug == true){meter.tick();}
    window.requestAnimationFrame(MainLoop);
}

function TrapezoidColorChange(){
    if (Phase==1){
        if (TrapezoidColor[0]<244&&Phase==1){
            TrapezoidColor[0]=TrapezoidColor[0]+1;
            return;
        }
        Phase=2;
    }
    if (Phase==2){
        if(TrapezoidColor[1]<244&&Phase==2){
            TrapezoidColor[1]=TrapezoidColor[1]+1;
            return;
        }
        Phase=3;
    }
    if(Phase==3){
        if(TrapezoidColor[0]>65&&Phase==3){
            TrapezoidColor[0]=TrapezoidColor[0]-1;
            return;
        }
        Phase=4;
    }
    if(Phase==4){
        if(TrapezoidColor[2]<244&&Phase==4){
            TrapezoidColor[2]=TrapezoidColor[2]+1;
            return;
        }
        Phase=5;
    }
    if(Phase==5){
        if(TrapezoidColor[1]>65&&Phase==5){
            TrapezoidColor[1]=TrapezoidColor[1]-1;
            return;
        }
        Phase=6;
    }
    if (Phase==6){
        if (TrapezoidColor[0]<244&&Phase==6){
            TrapezoidColor[0]=TrapezoidColor[0]+1;
            return;
        }
        Phase=7;
    }
    if(Phase==7){
        if(TrapezoidColor[2]>65&&Phase==7){
            TrapezoidColor[2]=TrapezoidColor[2]-1;
            return;
        }
        Phase=1;
    }
}

function Logic(){
    if (TransX>1){
        TransX=-1.25;
    }if(TransX<-1.25){
        TransX=1;
    }if (TransY>1.5){
        TransY=-1;
    }if(TransY<-1){
        TransY=1.5;
    }
    if (rightpressed==true){ //If right arrow is pressed
        TransX = TransX+0.05*deltatime;
    }if(leftpressed==true){ //If left arrow is pressed
        TransX = TransX-0.05*deltatime;
    }if (uppressed==true){ //If right arrow is pressed
        TransY = TransY+0.05*deltatime;
    }if(downpressed==true){ //If left arrow is pressed
        TransY = TransY-0.05*deltatime;
    }
    if (wpressed==true){ //If right arrow is pressed
        CamPos[2] = CamPos[2]+0.05*deltatime;
    }if(dpressed==true){ //If left arrow is pressed
        CamPos[0] = CamPos[0]-0.05*deltatime;
    }if (apressed==true){ //If right arrow is pressed
        CamPos[0] = CamPos[0]+0.05*deltatime;
    }if(spressed==true){ //If left arrow is pressed
        CamPos[2] = CamPos[2]-0.05*deltatime;
    }if (spacepressed==true){ //If right arrow is pressed
        CamPos[1] = CamPos[1]+0.05*deltatime;
    }if(shiftpressed==true){ //If left arrow is pressed
        CamPos[1] = CamPos[1]-0.05*deltatime;
    }
    
    
    LookPos = [CamPos[0],CamPos[1],CamPos[2]+5]
}

function LoopFirst(){
    canvas.width = window.innerWidth; //set canvas to window size
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); //Set the viewport to the window size
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT| gl.DEPTH_BUFFER_BIT);
    if(!lasttime) {
        lasttime = Date.now();
        fps = 0;
        return;
    }
    delta = (Date.now() - lasttime)/1000;
    deltatime = (Date.now() - lasttime)/100;
    lasttime = Date.now();
    fps = 1/delta
    //console.log("FPS: "+fps+" DELTATIME: "+deltatime);
}

function Draw2DObjects(){
    DrawRectangle(TransX,TransY,.25,.5,[255,255,255,255])
    DrawTrapezoidLogo();   
}

function Draw3dObjects(){
    //DrawTrianglePlane([1,  1,0,1,  0,0,0,1, 0,],TrapezoidColor);
    //gl.enable(gl.CULL_FACE);
    //gl.cullFace(gl.FRONT_AND_BACK);
    gl.enable(gl.DEPTH_TEST);
    DrawQuadPlane([1,  1,0,-1,  1,0,1,-1, 0,-1,-1, 0,],[0,0,255,255]);
    DrawQuadPlane([1,  1,2,-1,  1,2,1,-1, 2,-1,-1, 2,],[0,255,0,255]);
    DrawQuadPlane([1,  1,0,-1,  1,0,1,1, 2,-1,1, 2,],[255,0,0,255]);
    DrawQuadPlane([1,  -1,0,-1,  -1,0,1,-1, 2,-1,-1, 2,],[255,255,0,255]);
    DrawQuadPlane([1,1,0,  1,1,2,  1,-1,0,  1,-1,2,],[0,255,255,255]);
    DrawQuadPlane([-1,1,0,  -1,1,2,  -1,-1,0,  -1,-1,2,],[255,255,255,255]);
}