const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(10, 690, 3000, 10);
    Ball= new ball(200,200,80,80);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,320,70,70);
    box4 = new Box(700,320,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(700,320,70,70);
    box7 = new Box(700,320,70,70);
    box8 = new Box(700,320,70,70);
    box9 = new Box(700,320,70,70);
    box10= new Box(800,320,70,70);
    box11= new Box(800,320,70,70);
    box12= new Box(800,320,70,70);
    box13= new Box(800,320,70,70);
    box14= new Box(800,320,70,70);
    box15= new Box(800,320,70,70);
    box16= new Box(800,320,70,70);
    box17= new Box(800,320,70,70);
    box18= new Box(800,320,70,70);
    



   
    slingshot = new SlingShot(Ball.body,{x:200, y:50});
}

function draw(){
   
        background("cyan");
    
       
    
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    
    ground.display();
    Ball.display();

    slingshot.display();    
}

function mouseDragged(){
   
       Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
  
}


//function mouseReleased(){
 //   slingshot.fly();
  //  gameState = "launched";
//}

