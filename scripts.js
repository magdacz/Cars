
var Car = function(x, y) {
    this.x = x;
    this.y = y;
    this.showCar()
}

Car.prototype.showCar = function() {
    var carHtml = '<img src="http://nostarch.com/images/car.png">';
    
    this.carElement = $(carHtml);
    
    this.carElement.css({
        position: "acsolute",
        left: this.x,
        top: this.y
    })
    
    $('body').append(this.carElement)
}

var volvo = new Car(100, 200)