var canvas = document.getElementById("canvas")
var gl = canvas.getContext("webgl");
var Ready = false;
var TransX = -1;
var TransY = 1;
var leftpressed,rightpressed,uppressed,downpressed;
var now, fps, deltatime, lasttime, delta;
var then = 0;
var TrapezoidColor = [244, 65, 65, 255];
var Phase = 1;