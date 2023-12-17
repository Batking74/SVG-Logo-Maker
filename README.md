# SVG Logo Maker
![Nazirs SVG Logo Maker Project Image](./Assets/Nazirs-SVG-Logo-Maker-Project.webp)

## Description
The SVG Logo Maker is a Node.js application that simplifies logo creation by generating a logo just by typing! Easily design logos by manipulating shapes and colors, all within the convenience of this Node.js tool.

### Usage

1. Initiate npm using the following command:
```bash
npm init -y
```

2. Install the required Node.js modules fs and inquirer:
```bash
npm i fs inquirer@8.2.4
```

3. Navigate to the index.js folder in your command line:
```bash
cd path/to/your/index.js
```

4. Run the application by executing either of the following commands:
```bash
node index.js <OR> npm start
```


## Technologies Used
- JavaScript
- Node.js

## Dependencies
- inquirer
- fs


## Test Results
```bash
 PASS  ./shapes.test.jslike your SVG to be?  
  Question Class Instantiation Test
    √ Should return an object containing the type, name, and message values (2 ms)
  Circle Class Instantiation Test
    √ Should return a string circle HTML element with different attributes (1 ms)
  Rectangle Class Instantiation Test
    √ Should return a string rect HTML element with different attributes
  Ellipse Class Instantiation Test
    √ Should return a string ellipse HTML element with different attributes
  Polygon Class Instantiation Test
    √ Should return a string polygon HTML element with different attributes (1 ms)
  Create SVG Funtion tests results
    √ Should return SVG Created Successfully! (1 ms)

Test Suites: 1 passed, 1 total                                                                                                                                                                          
Tests:       6 passed, 6 total                                                                                                                                                                          
Snapshots:   0 total
Time:        1.096 s
Ran all test suites.
```
Video of Application: https://www.youtube.com/watch?v=8H83Leu1Hws

GitHub Repo: https://github.com/Batking74/SVG-Logo-Maker