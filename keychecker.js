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
});