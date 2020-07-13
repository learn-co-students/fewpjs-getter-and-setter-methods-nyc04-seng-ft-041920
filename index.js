class Circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return 2 * Math.PI * this.radius
  }

  get area(){
    return this.radius ** 2 * Math.PI
  }

  set diameter(diameter){
    this.radius = diameter / 2
  }

  set circumference(cir){
    this.radius = cir / 2 / Math.PI
  }

  set area(area){
    this.radius = Math.sqrt(area / Math.PI)
  }
}