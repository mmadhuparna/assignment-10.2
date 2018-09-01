//creating class
class Airplane {
    constructor(name, occupancy, speed) {
    this.name = name;
    this.occupancy = occupancy;
    this.speed = speed;
  }
  //get method for validation
  get Validate(){
    return this.validateName() + '\n' + this.validateOccupancy()+ '\n' + this.validateSpeed();
  }
  //method created to validate name
  validateName(){
    if(this.name == ''){
      return "name cannot be empty";
    }
    else{
      return this.name
    }
  }
  //method created to validate occupancy
  validateOccupancy(){
    if(this.occupancy ==''|| this.occupancy < 0 || this.occupancy > 180){
      return "Occupancy cannot be empty, should not be negative and should not be morethan 180";
    }
    else{
      return this.occupancy;
    }
  }
  //method created to validate speed
  validateSpeed(){
    if(this.speed ==''|| this.speed < 0 || this.speed > 900){
      return "Speed cannot be empty, should not be negative and should not be more than 900";}
    else{
      return this.speed;
    }
  }
  //status method created
  status(){  
    return "airplane:"+" "+this.name+" "+ "with"+ " " +this.occupancy+" "+"occupancy,is moving at"+" "+this.speed+"km/hr"
  }
  //creating increase speed method
  increaseSpeed(speedup){
    return this.speed = this.speed + speedup;

  }
  //creating decrease speed method
  decreaseSpeed(speedlow){
    return this.speed = this.speed - speedlow;}
}
//new object created to test the methods
var x = new Airplane('Boeing777', 180, 900);
console.log(x.Validate);
console.log(x.status());
console.log(x.increaseSpeed(10));
console.log(x.decreaseSpeed(100));

var a = new Airplane('Boeing312', 100, 1000);  //first object created
console.log(a.Validate);   //calling the get method for validation
console.log(a.status());  //calling the status method
console.log("increased speed:"+ " "+ a.increaseSpeed(200)); //increase speed by 200
console.log(a.status());  //status after increasing speed

var b = new Airplane('', 50, 700); //second object created
console.log(b.Validate);
console.log(b.status());
console.log("increased speed:"+ " "+ b.increaseSpeed(200));
console.log(b.status());

var c= new Airplane('Boeing676', 120, 550); //third object created
console.log(c.Validate);
console.log(c.status());
console.log("increased speed:"+ " "+ c.increaseSpeed(200));
console.log(c.status());