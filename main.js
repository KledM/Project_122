function preload() 
{

}

function setup() 
{
    canvas = createCanvas(600, 300);
    canvas.position(110, 350);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() 
{
    image(video, 0, 0, 640, 480);
    fill(0, 300, 0);
    stroke(0, 300, 0)
    rect(0,0, 10000, 60, )
    rect(0,245, 100000, 60)
    rect(0,0, 60, 10000)
    rect(550,0, 60, 10000)
    fill(200, 0, 0);
    stroke(200, 0, 0)
    circle(30, 30, 60);
    circle(570, 30, 60);
    circle(30, 270, 60);
    circle(570, 270, 60);
}

function take_snapshot() 
{
    save('snapshot.png');
}
