// Importing Classses
const { Circle, Rectangle, Ellipse, Polygon } = require('./Shapes');
const { Question, createSVG } = require('./index');


// Testing Questions Classses
describe('Question Class Instantiation Test', () => {
    test('Should return an object containing the type, name, and message values', () => {
        const questionType = 'input';
        const questionName = 'username';
        const questionMessage = 'Enter your username';

        const question = new Question(questionType, questionName, questionMessage);

        // Verify that the properties are set correctly
        expect(question.type).toBe(questionType);
        expect(question.name).toBe(questionName);
        expect(question.message).toBe(questionMessage);
    });
});


// Testing Circle Class
describe('Circle Class Instantiation Test', () => {
    test('Should return a string circle HTML element with different attributes', () => {
        const circle = new Circle('red', 150, 100, 80);
        expect(circle.getCircleShape()).toBe(`<circle cx="150" cy="100" r="80" fill="red" />`);
    })
})


// Testing Rectangle Class
describe('Rectangle Class Instantiation Test', () => {
    test('Should return a string rect HTML element with different attributes', () => {
        const rect = new Rectangle('pink', 50, 50, 200, 130);
        const expectedValue = `<rect x="50px" y="50px" width="200px" height="130px" fill="pink" />`;
        expect(rect.getRectangleShape()).toBe(expectedValue);
    })
})


// Testing Ellipse Class
describe('Ellipse Class Instantiation Test', () => {
    test('Should return a string ellipse HTML element with different attributes', () => {
        const ellipse = new Ellipse('green', 150, 100, 130, 65);
        const expectedValue = `<ellipse cx="150" cy="100" rx="130" ry="65" fill="green" />`;
        expect(ellipse.getEllipseShape()).toBe(expectedValue);
    })
})


// Testing Polygon Class
describe('Polygon Class Instantiation Test', () => {
    test('Should return a string polygon HTML element with different attributes', () => {
        const polygon = new Polygon('blue', `50, 50, 150, 150, 250, 50`, 'black', 42);
        const expectedValue = `<polygon points="50, 50, 150, 150, 250, 50" fill="blue" stroke="black" stroke-width="42" />`;
        expect(polygon.getPolygonShape()).toBe(expectedValue);
    })
})


// Testing createSVG Funtion
describe('Create SVG Funtion tests results', () => {
    test('Should return SVG Created Successfully!', () => {
        const response = createSVG({
            ShapeColor: 'blue',
            TextColor: 'red',
            Text: 'Naz',
            Shape: 'Rectangle'
        });
        expect(response).toBe('SVG Created Successfully!');
    })
})