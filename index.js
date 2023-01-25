// Load dependencies and classes
import inquirer from "inquirer";
import fs from "fs"
import Intern from "./src/Intern.js";
import Engineer from "./src/Engineer.js";
import Manager from "./src/Manager.js";
import { genrerateTeam } from "./src/generator.js";

const rolePrompt = [
    {
        name: "role",
        message: "Select the employee's role.",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const continuePrompt = {
    name: "continue",
    message: "Add another employee?",
    type: "confirm",
};

const initalPrompts = [
    {
        name: "name",
        message: "Enter the employee's name.",
        type: "input",
    },
    {
        name: "email",
        message: "Enter the employee's email.",
        type: "input",
    },
];

const specificPrompts = [
    {
        name: "officeNumber",
        message: "Enter this manager's office number.",
        type: "input",
    },
    {
        name: "github",
        message: "Enter this Engineer's GitHub.",
        type: "input",
    },
    {
        name: "school",
        message: "Enter this intern's school.",
        type: "input",
    },
];

async function collectInput() {
    const team = [];

    let hasMoreEmployees = true;

    while (hasMoreEmployees) {
        const { role } = await inquirer.prompt(rolePrompt);

        const prompts = [...initalPrompts];

        switch (role) {
            case "Manager":
                prompts.push(specificPrompts[0]);
                break;
            case "Engineer":
                prompts.push(specificPrompts[1]);
                break;
            case "Intern":
                prompts.push(specificPrompts[2]);
                break;
        }

        prompts.push(continuePrompt);

        const { continue: willContinue, ...answers } = await inquirer.prompt(
            prompts
        );

        let employee;
        switch (role) {
            case "Manager":
                employee = new Manager(
                    answers.name,
                    team.length + 1,
                    answers.email,
                    answers.officeNumber
                );
                break;
            case "Engineer":
                employee = new Engineer(
                    answers.name,
                    team.length + 1,
                    answers.email,
                    answers.github
                );
                break;
            case "Intern":
                employee = new Intern(
                    answers.name,
                    team.length + 1,
                    answers.email,
                    answers.school
                );
                break;
        }

        team.push(employee);

        hasMoreEmployees = willContinue;
    }

    return team;
}

async function init() {
    try {
        const team = await collectInput();
        const htmlString = await genrerateTeam(team);
        fs.writeFileSync("./dist/index.html", htmlString)
        console.log(htmlString);
    } catch (error) {
        console.log(error);
    }
}

init();
