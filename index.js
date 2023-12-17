// Declaring Variables
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { displaySVGData } = require('./SVG_Creater');


// Creating Questions class
class Question {
    constructor(type, name, message) {
        this.type = type;
        this.name = name;
        this.message = message;
    }
}


// Creating list class
class list extends Question {
    constructor(type, name, message, choices) {
        super(type, name, message);
        this.choices = choices;
    }
    validate(answer) {
        if(answer.length > 3) {
            return 'Answer is too long must be 3 characters or less!';
        }
        return true;
    }
}


// Instantiating Objects
const question1 = new Question('input', 'ShapeColor', 'What color would you like your SVG to be? ');
const question2 = new Question('input', 'TextColor', 'What color would you like your SVG text to be? ');
const question3 = new Question('input', 'Text', 'What text would you like the SVG to have? ');
const question4 = new list('list', 'Shape', 'What shape would you like your SVG to be? ', ['Circle', 'Rectangle', 'Ellipse', 'Polygon']);


// Grouping Question objects together
const questions = [question1, question2, question3, question4];


// Creates new SVG file with users specified attributes
function createSVG(usersResponse) {
    usersResponse.ShapeColor = usersResponse.ShapeColor.toLowerCase();
    usersResponse.TextColor = usersResponse.TextColor.toLowerCase();
    writeFile(`./Assets/Logo.svg`, displaySVGData(usersResponse), (error) => {
        if(error) {
            console.error(`Something went wrong in CreateSVG Funtion: ${error.message}`);
            throw error;
        }
    })
    return 'SVG Created Successfully!';
}


// Prompting questions for the user on what attributes the SVG should have
prompt(questions)
.then(usersResponse => {
    createSVG(usersResponse);
})
.catch(error => {
    console.log(error);
})


// Exporting Class
module.exports = { Question, createSVG };