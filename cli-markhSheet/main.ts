#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n",chalk.bold.redBright(`\t\t\t\t<========`) ,chalk.bold.redBright.bgWhite(` CODE WITH AMINA NOOR`), chalk.bold.redBright(`========>\n`));
console.log(chalk.bold.greenBright(`\t\t\t\t\t<----------`),chalk.bold.blueBright(`Check Your MarkSheet`), chalk.bold.greenBright(`---------->\n\n`));

// asking for name
let name = await inquirer.prompt([
    {
        type: "input",
        name:"myName",
        message: chalk.bold.blue("Please Enter Your Name...")
    }
])

//asking for roll num
let roll = await inquirer.prompt({
    type:"number",
    name: "num1",
    message: chalk.bold.blue("Please Enter your roll number... ")
});
// roll num
let rollNum: number = roll.num1

//checking roll number
if (rollNum) {
    
    let marks =await inquirer.prompt([
        {
            name:"typescript",
            type:"number",
            message: chalk.bold.blue("Please enter your typescript number:"),
        },
        {
            name:"python",
            type:"number",
            message: chalk.bold.blue("Please enter your python number:"),
        },
        {
            name:"java",
            type:"number",
            message: chalk.bold.blue("Please enter your java number:"),
        },
    ])
    
    //extract marks
    let ts:number = marks.typescript
    let pyth:number =marks.python
    let java:number =marks.java
    //percentage
    let totalMarks:number = 300
    let obtainMarks: number = ts + pyth + java
    let percent = ((obtainMarks/totalMarks)*100).toFixed(0)
    

    //answers
    console.log(chalk.gray(`\t\tName: ${name.myName}`));
    console.log(chalk.green(`Typescript marks = ${ts} out of 100`));
    console.log(chalk.yellow(`Python marks = ${pyth} out of 100`));
    console.log(chalk.red(`Java marks = ${java} out of 100`));
    console.log(chalk.cyan(`Obtain Mark = ${obtainMarks}\nTotal Marks = ${totalMarks}`));
    console.log(chalk.magenta(`Percentage = ${percent}%`));
    // This function assign grades 
    function assignGrades(score: any) {
        if(score <= 100 && score >= 90) {
            console.log("Congratulations! Your Score is: A+");
        } else if(score < 90 && score >= 80) {
            console.log("Congratulations! Your Score is:  A");
        } else if(score < 80 && score >= 70) {
            console.log("Congratulations! Your Score is: B+");
        } else if(score < 70 && score >= 60) {
            console.log("Your Score is: B");
        }  else if(score < 60 && score >= 50) {
            console.log("Your Score is: C+");
        } else if(score < 50 && score >= 40) {
            console.log("Your Score is: C");
        } else {
            console.log("Your Score is: F");
        }
    }
     assignGrades(percent);
    console.log("\n",chalk.bold.redBright("\t\t\t\t<======"), chalk.bold.italic.redBright.bgWhite("Allah Hafiz"), chalk.bold.redBright("=====>\n"))
    
} else {
    console.log(chalk.red("Invalid roll number"));
}