const chalk = require("chalk");
const validator = require("validator");
// console.log(chalk.red.underline.inverse("false"));

const result =  validator.isEmail('foo@bar.com');

console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));

