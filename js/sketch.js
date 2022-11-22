var mySong, amplitude;
function preload(){
    mySong=loadSound('Assets/massiveAttackAngel.mp3');
}
function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    mySong.play();
amplitude =  new p5.Amplitude();
}

function draw() {
    
    var level =amplitude.getLevel();
 console.log(level)
 var vol = map(level, 0, 1, 0, 1000);
 var col = map(level, 0, 1, 0, 255);
 background(col);
 if(vol >200){
     fill('orange');
     ellipse(width/2, height/2, vol+100)
 }
    fill(255, 255, 255);
    ellipse(width/2, height/2, vol);
}