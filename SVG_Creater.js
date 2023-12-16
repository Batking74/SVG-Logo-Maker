// Importing Classes
const { Circle, Rectangle, Ellipse, Polygon } = require('./Shapes');


// Returns SVG code with dynamic data
function getSVG(data, shape, textSize, y) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="${y}" font-size="${textSize}" text-anchor="middle" fill="${data.TextColor}">${data.Text}</text>
    </svg>
    `;
}


// Returns SVG Generated Code
function displaySVGData(data) {
    let SVG;
    let shape = data.Shape;
    // Circle Condition
    if(shape === 'Circle') {
        const circle = new Circle(data.ShapeColor, 150, 100, 80);
        SVG = getSVG(data, circle.getCircleShape(), 30, 115);
    }
    // rect Condition
    else if(shape === 'Rectangle') {
        const rectangle = new Rectangle(data.ShapeColor, 50, 50, 200, 130);
        SVG = getSVG(data, rectangle.getRectangleShape(), 30, 125);
    }
    // ellipse Condition
    else if (shape === 'Ellipse') {
        const ellipse = new Ellipse(data.ShapeColor, 150, 100, 130, 65);
        SVG = getSVG(data, ellipse.getEllipseShape(), 60, 125);
    }
    // polygon Condition
    else {
        const polygon = new Polygon(data.ShapeColor, `50, 50, 150, 150, 250, 50`, 'orange', 5);
        SVG = getSVG(data, polygon.getPolygonShape(), 20, 90);
    }
    return SVG;
}


// Exporting function
module.exports = { displaySVGData };