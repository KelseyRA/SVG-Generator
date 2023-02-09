const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// Renders the appropriate code based on the users input and generates the svg.

function generateSVG(response) {
    if (response.shape === 'Circle') {
        const circle = new Circle(response.textColor, response.shapeColor, response.text)
        return circle.render()
    }

    if (response.shape === 'Triangle') {
        const triangle = new Triangle(response.textColor, response.shapeColor, response.text)
        return triangle.render()
    }

    if (response.shape === 'Square') {
        const square = new Square(response.textColor, response.shapeColor, response.text)
        return square.render()
    }

}

module.exports = generateSVG
