class Fish
{
    constructor(state, x, y)
    {
      this.x = x
      this.y = y
      this.state = state
      this.alpha = 100
      this.color = [random(255,200),random(200,125),random(255,200)]
    }
    move()
    {
      fill(this.color[0],this.color[1],this.color[2],this.alpha)
      textSize(30)
      text("x", this.x, this.y)
      
      this.x+=random(-2,2)
      this.y+=random(-2,2)
      if(this.state == 0)
        {
          this.alpha-=0.1
        }
      else{
        this.alpha-=0.1*this.state
      }
      
      noFill()
      if(this.alpha < 0)
        {
          delete this
        }
    }
    nextState()
    {
      this.alpha += 100
    }
}