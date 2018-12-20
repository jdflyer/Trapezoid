document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        //console.log("Left was pressed")
        leftpressed = true;
    }
    else if(event.keyCode == 39) {
        //console.log("Right was pressed")
        rightpressed = true;
    }
    else if(event.keyCode == 38) {
        //console.log("Up was pressed")
        uppressed = true;
    }
    else if(event.keyCode == 40) {
        //console.log("Down was pressed")
        downpressed = true;
    }
    if(event.keyCode == 87) {
        //w
        wpressed = true;
    }
    else if(event.keyCode == 65) {
        //a
        apressed = true;
    }
    else if(event.keyCode == 83) {
        //s
        spressed = true;
    }
    else if(event.keyCode == 68) {
        //d
        dpressed = true;
    }
    else if(event.keyCode == 16) {
        //clrl
        shiftpressed = true;
    }
    else if(event.keyCode == 32) {
        //d
        spacepressed = true;
    }
});
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37) {
        //console.log("Left was released")
        leftpressed = false;
    }
    else if(event.keyCode == 39) {
        //console.log("Right was released")
        rightpressed = false;
    }
    else if(event.keyCode == 38) {
        //console.log("Up was released")
        uppressed = false;
    }
    else if(event.keyCode == 40) {
        //console.log("Down was released")
        downpressed = false;
    }
    if(event.keyCode == 87) {
        //w
        wpressed = false;
    }
    else if(event.keyCode == 65) {
        //a
        apressed = false;
    }
    else if(event.keyCode == 83) {
        //s
        spressed = false;
    }
    else if(event.keyCode == 68) {
        //d
        dpressed = false;
    }
    else if(event.keyCode == 16) {
        //clrl
        shiftpressed = false;
    }
    else if(event.keyCode == 32) {
        //d
        spacepressed = false;
    }
});