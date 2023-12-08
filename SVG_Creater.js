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
        shape = `<circle cx="150" cy="100" r="80" fill="${data.ShapeColor}" />`;
        SVG = getSVG(data, shape, 30, 115);
    }
    // rect Condition
    else if(shape === 'Rectangle') {
        shape = `<rect x="50px" y="50px" width="200px" height="130px" fill="${data.ShapeColor}" />`;
        SVG = getSVG(data, shape, 30, 125);
    }
    // ellipse Condition
    else if (shape === 'Ellipse') {
        shape = `<ellipse cx="150" cy="100" rx="130" ry="65" fill="${data.ShapeColor}" />`;
        SVG = getSVG(data, shape, 60, 125);
    }
    // polygon Condition
    else {
        shape = `<polygon points="50,50 150,150 250,50" fill="${data.ShapeColor}" stroke="orange" stroke-width="5" />`;
        SVG = getSVG(data, shape, 20, 90);
    }
    return SVG;
}


// Exporting function
module.exports = { displaySVGData };