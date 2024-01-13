function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20)
    rect(40,40,20,400)
    rect(580,40,20,400)
    rect(90,420,460,20)

    fill(255,0,0);    
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);

}

function take_snapshot(){
    save('frame.png');
}

