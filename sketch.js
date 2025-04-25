function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#B657C6');
  fill('#03A9F4');
  circle(200,200,300); // rosto
  fill('white');
 circle(150,150,60); // olho esquerdo 
  circle(250,150,60); // olho direito 
  line(150,270,300,235); // boca
  fill('#2196F3')
  triangle(200,180,170,220,220,220); // nariz 
  line(123,115,178,113); // sobrancelha esquerda
  line(225,116,279,106); // sobrancelha direita
  circle(150,150,10); // pupila esquerda 
  circle(250,150,10); // pupila direita
  
  if(mouseIsPressed){
     console. log(mouseX,mouseY);         
      } 
  }