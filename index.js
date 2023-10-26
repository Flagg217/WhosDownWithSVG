const inquirer = require('inquirer');
const fs = require('fs');
const { Svg } = require('./lib/svg.js');

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
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const svg = new Svg(answers.shape, answers.bgColor, answers.text, answers.textColor);
        writeToFile('index.html', svg.render());
    });


}

init();

