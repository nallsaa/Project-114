function preload(){
    mustache = loadImage("https://i.postimg.cc/k520Nt2M/My-project.png")
}

function draw(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}


function take_snapshot(){
    save("hi.png")
}

function draw(){
    image(video,0,0,300,300)
    image(mustache, noseX-55, noseY-55, 120, 120)
    }


function modelLoaded(){
    console.log("PoseNet is initialized")
}

noseX = 0
noseY = 0
function gotPoses(results){
    if (results.length > 0){

    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
    }

}

