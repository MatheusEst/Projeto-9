
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if (keyDown("D")) 
  {
    background("purple");
    
  }
  if (keyDown("S")) 
  {
    background("black");
    
  }
  if (keyDown("A")) 
  {
    background("darkblue");
    
  }
  if (keyDown("W")) 
  {
    background("cyan");
    
  }
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

