import chalk from 'chalk';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        `${chalk.bgCyan(' HELP ')}
        Without params - show weather
        -s [city] to choose City
        -h output HELP
        -t [API_KEY] to save token
        `
    );
};

export {printError, printSuccess, printHelp};