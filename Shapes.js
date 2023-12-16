// Shape Class
class Shape {
    constructor(color) {
        this.color = color;
    }
}


// Circle Class
class Circle extends Shape {
    constructor(color, cx, cy, r) {
        super(color);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    getCircleShape() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`
    }
}


// Rectangle Class
class Rectangle extends Shape {
    constructor(color, x, y, width, height) {
        super(color);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getRectangleShape() {
        return `<rect x="${this.x}px" y="${this.y}px" width="${this.width}px" height="${this.height}px" fill="${this.color}" />`;
    }
}


// Ellipse Class
class Ellipse extends Shape {
    constructor(color, cx, cy, rx, ry) {
        super(color);
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
    }
    getEllipseShape() {
        return `<ellipse cx="${this.cx}" cy="${this.cy}" rx="${this.rx}" ry="${this.ry}" fill="${this.color}" />`
    }
}


// Polygon Class
class Polygon extends Shape {
    constructor(color, points, strokeColor, strokeWidth) {
        super(color);
        this.points = points;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
    }
    getPolygonShape() {
        return `<polygon points="${this.points}" fill="${this.color}" stroke="${this.strokeColor}" stroke-width="${this.strokeWidth}" />`
    }
}


module.exports = { Shape, Circle, Rectangle, Ellipse, Polygon }