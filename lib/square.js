const Shape = require('./shapes');

class Square extends Shape {
    constructor(children);
    super(children, textColor, shapeColor);

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect x="10" y="10" width="150" height="150" fill="${response.shapeColor}"/>
   
        <text x="85" y="110" font-size="55" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
   
        </svg>`
    }

}




module.export = Square;