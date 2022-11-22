var mySong, amplitude, button, playflag;
function preload(){
    mySong=loadSound('Assets/massiveAttackAngel.mp3');
}
function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    
amplitude =  new p5.Amplitude();
button = createButton('Press To Play');
button.Toclass
button.size(100, 100);
button.position(width/2,height/2,);
button.mousePressed(buttonAction);
button.addClass('btn')

playflag = true;
}

function buttonAction(){
if (playflag == true){
    mySong.play();
    playflag = false;
    button.hide();
}
    
}

function draw() {
    if(playflag== false){
        var level =amplitude.getLevel();
    
        console.log()
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);
        background(col);
       
        if(vol >200){
            fill('orange');
            ellipse(width/2, height/2, vol+100)
            
        }
           noFill();
           stroke(255,255,255)
           ellipse(width/2, height/2, vol);
    }

}