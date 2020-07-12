// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI * this.radius * this.radius
    }



    set diameter(num){
        this.radius = (num/2)
    }

    set circumference(num){
        this.radius = num /(2 * Math.PI)
    }

    set area(num){
        this.radius = Math.sqrt(num / Math.PI)
    }
}