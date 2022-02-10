var canvas,bg;
var together;
var jerry,jerry1,jerry2,jerry3,jerry4,tom,tom1,tom2,tom3,tom4;

function preload()
{
    //carga aquí las imágenes
    //bg = loadImage("imagenes/garden.png");
    bg = loadImage("Imagenes/garden.png");
    jerry1 = loadImage("Imagenes/jerryOne.png");
    jerry2 = loadAnimation("Imagenes/jerryTwo.png","Imagenes/jerryThree.png");
    //jerry3 = loadImage("Imagenes/jerryThree.png");
    jerry4 = loadAnimation("Imagenes/jerryFour.png");
    tom1 = loadImage("Imagenes/tomOne.png");
    tom2 = loadAnimation("Imagenes/tomTwo.png","Imagenes/tomThree.png");
    //tom3 = loadImage("Imagenes/tomThree.png");
    tom4 = loadAnimation("Imagenes/tomFour.png");
}

function setup()
{
    canvas = createCanvas(1000,800);
    //crea aquí los sprites de Tom y Jerry
    jerry = createSprite(300,700);
    jerry.addAnimation("jerry1",jerry1);
    jerry.scale = 0.15;
    tom = createSprite(700,700);
    tom.addAnimation("tom1",tom1);
    tom.scale = 0.15;
}

function draw()
{
    //background(bg);
    background(bg);

    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        jerry.addAnimation("jerry4",jerry4);
        jerry.changeAnimation("jerry4");
        tom.addAnimation("tom4",tom4);
        tom.changeAnimation("tom4");
        tom.velocityX = 0;
        tom.x = 400;
    }
    drawSprites();
}

function keyPressed()
{
    //Escribe aquí el código para la animación de movimeinto y cambio
    if (keyCode === LEFT_ARROW)
    {
        jerry.addAnimation("jerry2",jerry2);
        jerry.changeAnimation("jerry2");
        jerry.fameDelay = 25;

        tom.velocityX = -5;
        tom.addAnimation("tom2",tom2);
        tom.changeAnimation("tom2");
        tom.fameDelay = 25;
    }
        
}