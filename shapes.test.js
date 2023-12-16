// Importing Classses
const { Circle, Rectangle, Ellipse, Polygon } = require('./Shapes');
const Question = require('./index');


// Testing Questions Classses
describe('Question Attributes', () => {
  test('Question instance is created correctly', () => {
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
describe('Returns a Circle String HTML Element', () => {
    test('Checking Circle Class', () => {
        const circle = new Circle('red', 150, 100, 80);
        expect(circle.getCircleShape()).toBe(`<circle cx="150" cy="100" r="80" fill="red" />`);
    })
})


// Testing Rectangle Class
describe('Returns a Rectangle String HTML Element', () => {
    test('Checking Rectangle Class', () => {
        const rect = new Rectangle('pink', 50, 50, 200, 130);
        const expectedValue = `<rect x="50px" y="50px" width="200px" height="130px" fill="pink" />`;
        expect(rect.getRectangleShape()).toBe(expectedValue);
    })
})


// Testing Ellipse Class
describe('Returns a Ellipse String HTML Element', () => {
    test('Checking Ellipse Class', () => {
        const ellipse = new Ellipse('green', 150, 100, 130, 65);
        const expectedValue = `<ellipse cx="150" cy="100" rx="130" ry="65" fill="green" />`;
        expect(ellipse.getEllipseShape()).toBe(expectedValue);
    })
})


// Testing Polygon Class
describe('Returns a Polygon String HTML Element', () => {
    test('Checking Polygon Class', () => {
        const polygon = new Polygon('blue', `50, 50, 150, 150, 250, 50`, 'black', 42);
        const expectedValue = `<polygon points="50, 50, 150, 150, 250, 50" fill="blue" stroke="black" stroke-width="42" />`;
        expect(polygon.getPolygonShape()).toBe(expectedValue);
    })
})
