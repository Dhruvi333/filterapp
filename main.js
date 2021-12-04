noseX= 0;
noseY= 0;
function preload(){
drawimustache= loadImage('musrcahe.png')
}



function setup(){
canvas=createCanvas(350, 350);
canvas.center();
    catcher=createCapture(VIDEO);
    catcher.hide();
    posenettt= ml5.poseNet(catcher, modelLoaded)
    posenettt.on('pose', gotposes)
}

function draw(){
image(catcher, 0,0, 350,350)
image(drawimustache, noseX, noseY, 30, 30);
}
function modelLoaded(){
console.log('model loaded!!!')
}
function gotposes(results){
if(results.length>0){
console.log(results);
noseX= results[0].nose.x;
noseY= results[0].nose.noseY;

}
}