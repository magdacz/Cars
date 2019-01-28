
var Car = function(x, y) {
    this.x = x;
    this.y = y;
    this.showCar()
}

Car.prototype.showCar = function() {
    var carHtml = '<img src="http://nostarch.com/images/car.png">';
    
    this.carElement = $(carHtml);
    
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    })
    
    $('body').append(this.carElement)
}

Car.prototype.carRight = function(distance) {
    this.x += distance;
    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.carLeft = function(distance) {
    this.x -= distance;
    this.carElement.css({
        left: this.x,
        top: this.y
    })
}

Car.prototype.carUp = function(distance) {
    this.y -= distance;
    this.carElement.css({
        left: this.x,
        top: this.y
    })
}
    
    Car.prototype.carDown = function(distance) {
      this.y += distance;
      this.carElement.css({
          left: this.x,
          top: this.y
      })
    } 
    

var volvo = new Car(100, 200);
var tesla = new Car(20, 20);

//volvo.carDown(40);
//tesla.carRight(200);
