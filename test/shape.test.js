// Class imports needed for testing.

const Triangle = require('../lib/triangle.js');
const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');

// Test for the Triangle Class.

describe('renderTriangle', () => {
    it('should output the color white, blue, and the text "ABC". The appropriate svg code is rendered', () => {
        const triangle = new Triangle('white', 'blue', 'ABC');
        expect(triangle.textColor).toBe('white');
        expect(triangle.shapeColor).toBe('blue');
        expect(triangle.text).toBe('ABC');
        expect(triangle.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" />

        <text x="150" y="150" font-size="55" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text>

        </svg>`)
    });
});

// Test for the Circle Class.

describe('renderCircle', () => {
    it('should output the color white, blue, and the text "ABC". The appropriate svg code is rendered', () => {
        const circle = new Circle('white', 'blue', 'ABC');
        expect(circle.textColor).toBe('white');
        expect(circle.shapeColor).toBe('blue');
        expect(circle.text).toBe('ABC');
        expect(circle.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" />

        <text x="150" y="125" font-size="55" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text>

        </svg>`)
    });
});

// Test for the Square Class.

describe('renderSquare', () => {
    it('should output the color white, blue, and the text "ABC". The appropriate svg code is rendered', () => {
        const square = new Square('white', 'blue', 'ABC');
        expect(square.textColor).toBe('white');
        expect(square.shapeColor).toBe('blue');
        expect(square.text).toBe('ABC');
        expect(square.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect x="10" y="10" width="150" height="150" fill="${square.shapeColor}"/>
   
        <text x="85" y="110" font-size="55" text-anchor="middle" fill="${square.textColor}">${square.text}</text>
   
        </svg>`)
    });
});