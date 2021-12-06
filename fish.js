class Fish
{
    constructor(state, x, y)
    {
      this.x = x
      this.y = y
      this.state = state
      this.alpha = 100
      
      this.redOrGreen = random(0, 1)
      if(this.redOrGreen <= 0.5)
      {
        this.color = [random(240,255),random(5,10),random(5,10)]
      }
      else
      {
        this.color = [random(5,10),random(240,255),random(5,10)]
      }
      this.lorr = random(0, 1)
      if(this.lorr <= 0.5)
      {
        this.orientation = "<><"
      }
      else
      {
        this.orientation = "><>"
      
      }
      
    }
    move()
    {
      fill(this.color[0],this.color[1],this.color[2],this.alpha)
      textSize(this.alpha * 0.1)
      text(this.orientation, this.x, this.y)
      
      this.x+=random(-1*this.state,this.state)
      this.y+=random(-1*this.state,this.state)
      if(this.state == 0)
        {
          this.alpha-=1.8
        }
      else{
        this.alpha-=1.8
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