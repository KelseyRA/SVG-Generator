const Shape = require('./shapes');

// Circle Triangle extends the parent Class 'Shape' and returns the code to create a triangle svg.

class Triangle extends Shape {
    constructor(textColor, shapeColor, text) {
        super(textColor, shapeColor, text);
    }

    render() {

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

        <text x="150" y="150" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`

    }

}

module.exports = Triangle;