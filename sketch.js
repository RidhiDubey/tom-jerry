var cat,cat1Img, cat_runningImg, cat2Img;
var mouse, mouse1Img, mouse_teasingImg,mouse2Img;
var back, backImg;
function preload() {
    //load the images here
    cat1Img=loadImage("cat1.png");
    cat_runningImg=loadImage("cat2.png","cat3.png");
    cat2Img=loadImage("cat4.png");
    mouse1Img=loadImage("mouse1.png");
    mouse_teasingImg=loadImage("mouse2.png","mouse3.png");
    mouse2Img=loadImage("mouse4.png");
    backImg=loadImage("garden.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    cat=createSprite(400,430,20,20);
    cat.addImage("cat1",cat1Img);
    cat.scale=0.1;

    mouse=createSprite(100,430,20,20);
    mouse.addImage("mouse1",mouse1Img);
    mouse.scale=0.1;

    back=createSprite(20,20,20,20);
    back.scale=0.5;

    mouse.debug=true;

    mouse.depth=cat.depth;
    cat.depth=cat.depth+1;
    
}

function draw() {
    background(backImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.velocityX=0;
        cat.addImage("cat2", cat2Img);
        cat.changeAnimation("cat2");

        mouse.addImage("mouse2", mouse2Img);
        cat.changeAnimation("mouse2");
        
       
    }
    keyPressed();

    
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-2;
        cat.addImage("catrun",cat_runningImg);
        cat.changeAnimation("catrun");
        mouse.addImage("mouse",mouse_teasingImg);
        mouse.changeAnimation("mouse");
        
    }
  //For moving and changing animation write code here


}
