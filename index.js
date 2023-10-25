const fs = require('fs');
const inquirer = require('inquirer');
const { Svg } = require('.lib/shapes');

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
}, 
    validate, (input) => {
        if (input.length > 3) {
            return 'Please enter three letters or less';
        }
        return true;
    }, {
        type: 'input',
        name: 'textColor',
        message: 'What text color would you like to use?',
}];


