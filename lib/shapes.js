class Shape {
    constructor(textColor, shapeColor, text) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.text = text;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shape;