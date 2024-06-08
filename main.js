noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristx = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('black');
    fill("purple");
    stroke("purple");
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML = "width and height of the square is " + difference + " px ";
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
   if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + " noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristx = results[0].pose.rightWrist.x;
    console.log("leftWristX = " + leftWristX + " rightWrist = " + rightWristx);
    difference = floor(leftWristX - rightWristx);
    console.log(difference);
   }
}

