function getSVG(data, shape, textSize, y) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="${y}" font-size="${textSize}" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>
    `
}


// Returns SVG Generated Code
function displaySVGData(data) {
    let SVG;
    let shape = data.shape;
    // Circle Condition
    if(shape === 'circle') {
        shape = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />`;
        SVG = getSVG(data, shape, 30, 115);
    }
    // rect Condition
    else if(shape === 'rect') {
        shape = `<rect x="50px" y="50px" width="200px" height="130px" fill="${data.shapeColor}" />`;
        SVG = getSVG(data, shape, 30, 125);
    }
    // ellipse Condition
    else if (shape === 'ellipse') {
        shape = `<ellipse cx="150" cy="100" rx="130" ry="65" fill="${data.shapeColor}" />`;
        SVG = getSVG(data, shape, 60, 125);
    }
    // polygon Condition
    else {
        shape = `<polygon points="50,50 150,150 250,50" fill="${data.shapeColor}" stroke="orange" stroke-width="5" />`;
        SVG = getSVG(data, shape, 20, 90);
    }
    console.log(SVG);
    return SVG;
}


// Exporting function
module.exports = { displaySVGData };