var bg,bi;
var door,di;
var win,wi;
var doorGroup,windowGroup;
var death,dis,dij;
var gs;
var go,goi;
var gose;
var rt,rtt;
var ss,gss;
gs = 'play';
function preload(){
  bi = loadImage('tower.png');
  di = loadImage('door.png');
  wi = loadImage('window.png');
  dis = loadImage('standing.png');
  dij = loadImage('jumping.png');
  goi = loadImage('gameOver.jpg ');
  rtt = loadImage('restart.png');
    ss = loadSound('gose.mp3');
  gss = loadSound('spooky.wav');
  doorGroup = new Group();
  windowGroup = new Group();
}
function setup() {
  createCanvas(600, 600); 
  //creating background thing
  
  bg = createSprite(300,300);
  bg.addImage("background",bi);
  bg.velocityY = 2;
  
  //creating Death
  
  death = createSprite(200,200,50,50);
  death.addImage(dis);
  death.scale = 0.5;
  
  //creating restart thingie
  
  
  go = createSprite(300,300);
  go.addImage("background",goi);
  go.visible = false;
  
  rt = createSprite(300,140);
  rt.addImage("restart",rtt);
  rt.scale = 0.05;
  rt.visible = false;
}
function draw(){
  background(0);
  if(gs == 'play'){
   gss.play();
    if(bg.y > 400){
    bg.y = 300;
  }
  if(keyDown("space")){
    // death.changeAnimation(dij);
    death.velocityY = -4;
   }
   if(keyDown("left_arrow")){
    death.x = death.x - 4;
   }
   if(keyDown("right_arrow")){
    death.x = death.x + 4;
   }
   if(death.isTouching(windowGroup)){
    death.velocityY = 0;
   }
   if(death.y > 600 || death.y < 0){
     death.destroy();
     gs = 'end';
   }
  spawnDoor();
  death.velocityY = death.velocityY + 0.4; 
  drawSprites();
  }
  else if(gs == 'end'){
    gss.pause();
    ss.play();
    go.visible = true;
    rt.visible = true;
    drawSprites();
  }
}
function spawnDoor(){
  if(frameCount%240==0){
   door = createSprite(200,-50);
   door.addImage(di);
   win = createSprite(200,10);
   win.addImage(wi);
   win.velocityY = 2;
   doorGroup.add(door);
   door.velocityY = 2;
   door.x = Math.round(random(120,400));
   win.x = door.x;
   door.lifeTime = 800;
   windowGroup.add(win);
   death.depth = door.depth;
   win.depth = door.depth;
   death.depth = death.depth + 1;
   win.lifeTime = 800;
  }
}