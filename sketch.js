const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, backgroundImg01;

var bg  ;

function preload() {
    // create getBackgroundImg( ) here
    getBackground();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg01)
    background(backgroundImg01);
    
    Engine.update(engine);
    getBackground()
    // write code to display time in correct format here
}


   async function getBackground(){
    
    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")
    
   //change the data in JSON format
    var responseon = await response.json();
    var datetime = responseon.datetime;
    console.log(responseon);
    console.log(datetime);
    
    // write code slice the datetime
    var hour = datetime.slice(11,13);
      console.log(hour); 
    
       // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=06){
        backgroundImg = "sunrise1.png";
}

else
if(hour>=6 && hour<=08){
    backgroundImg = "sunrise2.png";
}

    else
    if(hour>=08 && hour<=10){
        backgroundImg = "sunrise3.png";
    }

    if(hour>=10 && hour<=12){
        backgroundImg = "sunrise4.png";
    }

    if(hour>=12&& hour<=14){
        backgroundImg = "sunrise5.png";
    }
    

    if(hour>=14  && hour<=16){
        backgroundImg = "sunrise6.png";
    }
    

    if(hour>=16 && hour<=18){
        backgroundImg = "sunset7.png";
    }
    
    if(hour>=18 && hour<=20){
        backgroundImg = "sunset8.png";
    }
    
   else
    if(hour>=20 && hour<=22){
        backgroundImg = "sunset9.png";
    }
       else
        if(hour>=22 && hour<=24){
                backgroundImg = "sunset10.png";
        } 
            
        else
        if(hour>=00 && hour<=03){
            backgroundImg = "sunset11.png";
        }   
              
  else
  {
     backgroundImg = "sunset12.png";  
                }



                //load the image in backgroundImg variable here
               
            backgroundImg01 = loadImage(backgroundImg);
           console.log("backgroundImg",backgroundImg);
    
    }
    
    