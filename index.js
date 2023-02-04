const inquirer = require('inquirer');

const questions = [{

    type: "input",
    message: "Please enter no more than three letters to be used in your logo",
    name: "text"
},
{
    type: "input",
    message: "Enter a color of your text. This can be the color keyword or a hexadecimal number",
    name: "text-color"
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
    name: "shape-color"
}

]

inquirer.prompt(questions)
    // .then(responseHandler);
