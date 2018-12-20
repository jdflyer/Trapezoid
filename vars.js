var Debug = true;
var canvas = document.getElementById("canvas")
var gl = canvas.getContext("webgl");
var meter;
var Ready = false;
var TransX = -1;
var TransY = 1;
var leftpressed,rightpressed,uppressed,downpressed,wpressed,apressed,spressed,dpressed,shiftpressed,spacepressed;
var now, fps, deltatime, lasttime, delta;
var then = 0;
var TrapezoidColor = [244, 65, 65, 255];
var Phase = 1;
var CamPos = [0,0,-5];
var LookPos = [0,0,1];
var fovy = 45;