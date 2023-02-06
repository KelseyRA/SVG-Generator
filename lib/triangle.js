const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(children)

    render() {

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}" />

        <text x="150" y="150" font-size="55" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

        </svg>`

    }

}

module.export = Triangle;