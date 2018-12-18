function MainLoop(now){
    now = now*0.05;
    var deltatime = now-then;
    //console.log(deltatime);
    then=now;
    canvas.width = window.innerWidth; //set canvas to window size
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); //Set the viewport to the window size
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    //DrawQuad([TransX,TransY,TransX+.25,TransY,TransX,TransY-.5,TransX+.25,TransY-.5],[1,1,1,1]);
    DrawRectangle(TransX,TransY,.25,.5,[255,255,255,255])
    DrawTrapezoidLogo();
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
        TransX = TransX+0.005*deltatime;
    }if(leftpressed==true){ //If left arrow is pressed
        TransX = TransX-0.005*deltatime;
    }if (uppressed==true){ //If right arrow is pressed
        TransY = TransY+0.01*deltatime;
    }if(downpressed==true){ //If left arrow is pressed
        TransY = TransY-0.01*deltatime;
    }

    TrapezoidColorChange();

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