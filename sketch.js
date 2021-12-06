var states;
var fishes = [];
function setup() {
  createCanvas(400, 400);
  var current_state = 0;
  states = [
    [0, 1, 1, 2, 1, 0,0,0,0],
    [1, 1, 2, 1, 0, 0,0,0,0],
    [1,2,1,6,0,8,0,0,0],
    [0,1,0,5,6,7,8,0,0],
  ]

}
var last_mils = 0;
var last_state = 0;
let timer = 1000;
function draw(){
  /*var circleX = random(width);
  var circleY = random(height);
  var circleSize = random(10, 100);
  fill(random(255), random(255), random(255));
  
  ellipse(circleX, circleY, circleSize)
  */
  
  if(last_mils - millis() < timer)
  {

    if(last_state < states.length)
      {
        //print(states[last_state])
        for(var j = 0; j<states[last_state].length;j++)
        {
          //print(states[last_state][j])
          for(var k = 0; k<states[last_state][j]; k++)
          {
              fishes.push(new Fish(k, random(100,200),random(100,200)))
          }
        }
        last_mils += timer*2
        last_state+=1
      }

  }
  background(51)
  //print(fishes)
  for(let fish in fishes)
  {
    fishes[fish].move()
  }
  
}