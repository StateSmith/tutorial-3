"use strict";
import chalk from 'chalk'; // for colored console output

// handwritten code. Provides helper functions for the LightSm class.
export class LightSmBase
{
    lightBlue() {
        console.log(chalk.blue("BLUE"));
        // console.log("BLUE");
    }

    lightYellow() {
        console.log(chalk.yellow("YELLOW"));
        // console.log("YELLOW");
    }

    lightRed() {
        console.log(chalk.red("RED"));
        // console.log("RED");
    }
}