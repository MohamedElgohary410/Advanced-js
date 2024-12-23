// Abstract Shape class
function Shape() {
    if (this.constructor === Shape) {
        throw new Error(
            "Abstract class 'Shape' can't be instantiated directly."
        );
    }

    // Abstract method: calculateArea
    this.calculateArea = function () {
        throw new Error(
            "You must implement the calculateArea in the subclass."
        );
    };

    // Abstract method: calculatePerimeter
    this.calculatePerimeter = function () {
        throw new Error(
            "You must implement the calculatePerimeter in the subclass."
        );
    };
}


// Rectangle class extending Shape
// Rectangle class extending Shape
function Rectangle(width, height) {
    // Call to abstract parent class
    Shape.call(this);

    this.width = width;
    this.height = height;

    // Implement calculateArea
    this.calculateArea = function () {
        return this.width * this.height;
    };

    // Implement calculatePerimeter


}


// Example usage

// var shape = new Shape(); // Throws an error: Abstract class cannot be instantiated


// Rectangle
var rectangle = new Rectangle(10, 5);

console.log("Rectangle Area:", Rectangle.calculateArea()); // Output: 50
