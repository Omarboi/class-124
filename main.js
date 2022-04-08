function setup() {
video = createCapture(VIDEO);
video.size (550 , 500);

canvas = createCanvas(500 , 550);
canvas.Position(560 , 150); 

poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){

background('red')

}

function modelLoaded(){

    console.log(" PoseNet is Intitialized! ")

}

function gotPoses(results){

if (results.length > 0)

{
console.log(results);
}

}