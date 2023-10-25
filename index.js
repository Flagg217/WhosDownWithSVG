const fs = require('fs');
import inquirer from './inquirer.mjs';
const { Svg } = require('./lib/shapes');

const questions = [{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to draw?',
    choices: ['Square', 'Triangle', 'Circle'],
}, {
    type: 'input',
    name: 'bgColor',
    message: 'What background color would you like to use?',
    default: '#FFFFFF',
}, {
    type: 'input',
    name: 'text',
    message: 'What text would you like to use? (Three letters maximum)',
},  {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like to use?',
}];

function writeToFile(fileName, data) {
    fs.writeFileSync('./examples/' + fileName, data);
}

function init() {
    inquirer.createPrompt(questions).then(({ shape, bgColor, text, textColor }) => {
        const svg = new Svg(shape, bgColor, text, textColor).render();
        writeToFile('shape.svg', svg);
    });
}

init();

