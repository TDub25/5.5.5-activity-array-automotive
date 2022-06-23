//import { Vehicle } from "./vehicle.js";

//this includes the vehicle class as a module

//this shows how to call from this module...
class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
        this.fuel = 100
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        console.log('engine off')
        this.started = false;
    }
    typeOfVehicle() {
        if (this.numberOfWheels == 8) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4) {
            console.log(this.model + " " + this.make + " is a Car");
        } else if (this.numberOfWheels == 2) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage, maxPassengers, passenger, numberOfWheels, maxSpeed, fuel, scheduleService
    
        ) {
        super(make, model, year, color, mileage);
        this.maxPassengers = maxPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true;
            return this.scheduleService;                       
        }
    }
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true;
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000, 34,2,23,45,56,false)
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()
console.log(myCar.start())





// console.log("Hi" + greeeting);//ES5 STANDARD CONCATENATION
// console.log(`Hi ${greeeting}`);//ES6 STARDARD INTEERPOLATION