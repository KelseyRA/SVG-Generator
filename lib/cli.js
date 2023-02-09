const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./generateSVG")

// Inquirer prompts which are served to the user once the start the application.

function run() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter no more than three letters to be used in your logo",
                name: "text"
            },
            {
                type: "input",
                message: "Enter a color of your text. This can be the color keyword or a hexadecimal number",
                name: "textColor"
            },
            {
                type: "list",
                message: "Select a shape from the list below",
                choices: [
                    "Circle",
                    "Triangle",
                    "Square",
                ],

                name: "shape"

            },

            {
                type: "input",
                message: "Enter the color of the shape. This can be the color keyword or a hexadecimal number",
                name: "shapeColor"
            },

        ])
        .then((response) =>
            responseHandler(response)

        )
        .then(() => console.log('SVG Logo Created!!'))
        .catch(err => console.log(`Error: ${err}`));
}

// Writes the svg logo to the file system.

function responseHandler(response) {

    const svgLogo = generateSVG(response);

    fs.writeFileSync("./example/logo.svg", svgLogo)


}


module.exports = run;