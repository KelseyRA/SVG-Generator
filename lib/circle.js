const Shape = require('./shapes');

// Circle Class extends the parent Class 'Shape' and returns the code to create a circular svg.

class Circle extends Shape {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text);
  }


  render() {
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
  }

}


module.exports = Circle;