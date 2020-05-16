const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
function preload() {
    backgroundImg = loadImage("maxresdefault.jpg");
}



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
     
     mrbasic = new Ball(205,400,50,50);
     mrbasic2 = new Ball(50,700,50,50);
     heavyman = new Ball1(300,700,90,90);
     bouncyboi = new Ball2(200,700,45,45)
     chain = new Chain(mrbasic.body,{x:234, y:400});
     wall1 = new Wall(950,500,600,10);
     wall2 = new Wall(650,430,10,150);
     wall3 = new Wall(950,750,600.5,100)
     wall4 = new Wall(650,725,10,225)
     wall5 = new Wall (950,150,400,10)
     wall6 = new Wall(600,5,1200,10)
     wall7 = new Wall(600,795,1200,10)
     wall8 = new Wall (230,600,100,30)
 target1 = new Target(950,400,60,60);
 target2 = new Target(951,400,60,60);
 target3 = new Target(954,400,60,60);
 target4 = new Target(950,400,60,60);
 target5 = new Target(935,400,60,60);
 target6 = new Target(945,370,60,60);
 target7 = new Target(953,370,60,60);
 target8 = new Target(930,350,60,60);
 target9 = new Target(950,350,60,60);
 target10 = new Target(940,345,60,60);
 target11 = new Target(950,725,150,150);
 target111 = new Target(953,725,150,150);
 target112 = new Target(950,720,150,150);
 target113 = new Target(955,725,150,150);
 target114 = new Target(945,725,150,150);
 target12 = new Target(950,100,70,70);
target13 = new Target(950,50,50,50);
sling1 = new SlingShot(230,550,10,100);
sling2 = new SlingShot(230,0,10,500);



  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   // strokeWeight(4);
   mrbasic.display()
   mrbasic2.display()
    chain.display()
    wall1.display()
    wall2.display()
    wall3.display()
    wall4.display()
    wall5.display()
    wall6.display()
    wall7.display()
    wall8.display()
    target1.display()
    target2.display()
    target3.display()
    target4.display()
    target5.display()
    target6.display()
    target7.display()
    target8.display()
    target9.display()
    target10.display()
    target11.display()
    target12.display()
    target13.display()
    target111.display()
    target112.display()
    target113.display()
    target113.display()
    target114.display()
    sling1.display()
    sling2.display()
    heavyman.display()
    bouncyboi.display()
    
    
   
}
function mouseDragged(){
    if(mrbasic.body.position.x<400){
    Matter.Body.setPosition(mrbasic.body,{x : mouseX,y: mouseY}) 
    }
    if(mrbasic.body.position.x>250 && heavyman.body.position.x<350){
        Matter.Body.setPosition(heavyman.body,{x : mouseX,y: mouseY}) 
        }
        if(heavyman.body.position.x>400 && mrbasic2.body.position.x<350){
            Matter.Body.setPosition(mrbasic2.body,{x : mouseX,y: mouseY}) 
            }
            if(mrbasic2.body.position.x>400 && bouncyboi.body.position.x<350){
                Matter.Body.setPosition(bouncyboi.body,{x : mouseX,y: mouseY}) 
                }
}
function mouseReleased(){
chain.fly()   
}
function keyPressed(){
    if(keyCode = 114 && mrbasic.body.position.x<400){
        chain.attach(mrbasic.body)
    }
    if(keyCode = 114 && mrbasic.body.position.x>400 && heavyman.body.position.x<350){
        chain.attach(heavyman.body)
    }
    if(keyCode = 114 && heavyman.body.position.x>400 && mrbasic2.body.position.x<350){
        chain.attach(mrbasic2.body)
    }
    if(keyCode = 114 && mrbasic2.body.position.x>400 && bouncyboi.body.position.x<350){
        chain.attach(bouncyboi.body)
    }
    
}

