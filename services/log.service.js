import dedent from 'dedent';
import chalk from 'chalk';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}               
        Without params - show weather
        -s [city] to choose City
        -h output HELP
        -t [API_KEY] to save token
        `)
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent(`${chalk.bgMagenta(' Weather ')} Weather in city ${res.name}
        ${icon}   ${res.weather[0].description}
        Temperature: ${res.main.temp} (Fills like: ${res.main.feels_like})
        Humidity: ${res.main.humidity}
        Wind speed: ${res.wind.speed}
        `)
    );
};

export {printError, printSuccess, printHelp, printWeather};