import { stdin } from 'process';
import chalk from 'chalk';
import {lifeCheck} from './lifeCheck.js';
import {getLifeInfo} from './lifeInfo.js';

console.log(chalk.yellow("Answer the questions below and enter your reply line by line just the way the questions are being stated which is your name first and secondly your agelife"));
console.log(chalk.yellow("Take note:- Your age life should be typed in whole numbers."))
console.log(chalk.green('what are your names ?'));
console.log(chalk.red("And"));
console.log(chalk.green('what is your age life ?'));

stdin.on('data', (nameInput) => {
    const name = String(nameInput).trim();

    stdin.once('data', (lifeCheckInput) => {
        const life = parseInt(String(lifeCheckInput));
        const check = lifeCheck(life);
        const message = getLifeInfo(name, life, check);

        if (life === 'good life'){
            console.log(chalk.green(message));
        }else {
            console.log(chalk.blue(message));
        }
        process.exit();
    })
})