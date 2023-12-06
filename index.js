const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { displaySVGData } = require('./SVG_Creater');


// Questions that I will prompt the user to answer
const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the SVG to be? '
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like the SVG to have? '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like the SVG to be? ',
        choices: ['Circle, Square', 'Triangle', 'Rectangle', 'Pentagon', 'Hexagon', 'Octagon', 'Oval']
    }
]


// Creates new SVG file with users specified attributes
function createSVG(usersResponse) {
    writeFile('./Assets/circle.svg', displaySVGData(usersResponse), (error) => {
        console.log(error);
    })
}


// Prompting questions for the user on what attributes the SVG should have
prompt(questions)
.then(usersResponse => {
    createSVG(usersResponse);
})
.catch(error => {
    console.log(error);
})