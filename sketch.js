var states;
var fishes = [];
var w = 750;
var h = 750;
function setup() {
  createCanvas(w, h);
  var current_state = 0;
  states = new fishCount([3,4,3,1,2], 80).getOutput()

}
var last_mils = 0;
var last_state = 0;
let timer = 100;
function draw(){
  /*var circleX = random(width);
  var circleY = random(height);
  var circleSize = random(10, 100);
  fill(random(255), random(255), random(255));
  
  ellipse(circleX, circleY, circleSize)
  */
  
  if(last_mils - millis() < timer)
  {
    print(last_state)
    if(last_state < states.length)
      {
        //print(states[last_state])
        for(var j = 0; j<states[last_state].length;j++)
        {
          //print(states[last_state][j])
          for(var k = 0; k<states[last_state][j]; k++)
          {
              fishes.push(new Fish(k, random(0,h),random(0,w)))
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
    if(fishes[fish].alpha > 0)
    {
      fishes[fish].move()
    }
    else
    {
      delete fishes[fish]
    }
  }
  
}