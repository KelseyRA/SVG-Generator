const Shape = require('./shapes');
const CLI = require('./cli')

class Circle extends Shape {
  constructor(children);
  super(children);

  render() {
    return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />

      <text x="150" y="125" font-size="55" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

      </svg>`
  }

}


module.export = Circle;