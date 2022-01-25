function preload() {

}  
 function setup() {
     canvas = createCanvas(640, 480);
     canvas.position(110, 250);
     video = createCapture(VIDEO);
     video.hide();

 }

 function draw(){
     image(video, 0, 0, 640, 480);
     fill(0, 128, 0);
  stroke(120, 0, 0);
  circle(585, 40, 65);

  stroke( 0,128,0);
  fill(128,0,0);
  circle(40, 50, 65);

  stroke( 0,128,0);
  fill(128,0,0);
  circle(585, 450, 65);

  stroke( 120,0,0);
  fill(0,128,0);
  circle(40, 450, 65);

  

  
  
   
 }
 function take_snapshot(){
    save('student_name.png');

}
  