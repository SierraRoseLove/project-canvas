noseX = 0;
noseY = 0;

function preload() {
    mask = loadimage("https://i.postimg.cc/4xnGYQRp/download.png")
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

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function take_snapshot() {
    save.('myFilterImage.png');
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose x = results[0].pose.nose.x;
        nose y = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mask, noseX, noseY, 50, 20);
}