const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { displaySVGData } = require('./SVG_Creater');


// Questions that I will prompt the user to answer
const questions = [
    {
        type: 'input',
        name: 'ShapeColor',
        message: 'What color would you like your SVG to be? '
    },
    {
        type: 'input',
        name: 'TextColor',
        message: 'What color would you like your SVG text to be? '
    },
    {
        type: 'input',
        name: 'Text',
        message: 'What text would you like the SVG to have? ',
        validate: (answer) => {
            if(answer.length > 3) {
                return 'Answer is too long must be 3 characters or less!';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'Shape',
        message: 'What shape would you like your SVG to be? ',
        choices: ['Circle', 'Rectangle', 'Ellipse', 'Polygon']
    }
]


// Creates new SVG file with users specified attributes
function createSVG(usersResponse) {
    usersResponse.ShapeColor = usersResponse.ShapeColor.toLowerCase();
    usersResponse.TextColor = usersResponse.TextColor.toLowerCase();
    writeFile(`./Assets/Logo.svg`, displaySVGData(usersResponse), (error) => {
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