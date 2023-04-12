
class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
      
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

//Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
  const blackCoffee= new Coffee("black", "no","no")
// Write the code that outputs the black coffee's profile
console.log (blackCoffee.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
const regularCoffee= new Coffee("regular","1","2")

// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(regularCoffee.coffeeProfile())

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
class Latte{
    constructor(flavor, milkType, shot) {
      this.flavor= flavor.toLowerCase()
      this.milkType = milkType
      this.shot = shot
      
    }
    latteProfile(){
        return  `A ${this.flavor} latte with ${this.milkType} milk, ${this.shots()}` 
    }

    shots(){
        if (this.shot >1){
            return `${this.shot} shots`
        } else {
            return `${this.shot} shot`
        }
        
    }
}

// Write the code that makes a regular, single shot latte
const regularLatte = new Latte ("regular","regular","1")
// Log the regular, single shot latte's profile
console.log(regularLatte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
const hazeulnutLatte= new Latte("hazelnut","Almond","2")
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazeulnutLatte.latteProfile())
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
 class Cylinder {
    constructor (radius,height){
        this.radius=radius
        this.height=height
    }
    cylinderVolume(){
        let volume=this.radius*6.28318*this.height
        return volume
    }
    finalVolume(){
        return `volume of this cylinder is ${this.cylinderVolume().toFixed(4)}`
    }
 }
// Write the code that creates three unique cylinder objects
 
const firstCylinder= new Cylinder (20,20)
console.log (firstCylinder.finalVolume())

const secondCylinder= new Cylinder(34,239)
console.log(secondCylinder.finalVolume())

const thirdCylinder = new Cylinder(329,3293)
console.log(thirdCylinder.finalVolume())
