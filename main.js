noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {  
    image(video, 0, 0, 300, 300); 
    image(clown_nose, noseX-20, noseY-10, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}