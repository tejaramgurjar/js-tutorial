console .log('welcom to code with harry');

let car = {
    name:'maruti 800',
    topSpeed:89,
    run: function() {
        console.log('car is running')
    }


}

// console.log(car);

// we have already seen constuctors like these

// creative a constructor for car

function GenralCar(gievenName,gievenSpeed) {
    this.name = gievenName;
    this.topSpeed = gievenSpeed;
    this.run= function() {
        console.log(`${this.name} is running`)

    }
    this.analyze =function (){
        console.log(`this car is slower by ${200-this.topSpeed}km/hr than mercedij`)
    }
}
car1 = new GenralCar('nissan',180)
car2 = new GenralCar('maruti alto',80)
console.log(car2)