import { JSDOM } from "jsdom";

export async function genrerateTeam(team) {
    const dom = await JSDOM.fromFile(`./src/default.html`);
    const document = dom.window.document;
    const main = dom.window.document.querySelector("main");

    team.forEach((employee) => {
        // Create container to hold all the employee data
        const employeeContainer = document.createElement("div");
        employeeContainer.classList.add("employee-container");

        // Creates header of card and populates with neccesary data
        const header = document.createElement("header");
        header.classList.add("employee-header");
        const headerContainer = document.createElement("div");
        const nameDiv = document.createElement("h1");
        nameDiv.textContent = employee.getName();
        const roleDiv = document.createElement("h3");
        roleDiv.textContent = employee.getRole();
        const roleIcon = document.createElement("i");
        roleIcon.classList.add("fa-solid", employee.getIcon(), "fa-2xl");

        // Append children to header
        headerContainer.appendChild(nameDiv);
        headerContainer.appendChild(roleDiv);
        header.appendChild(headerContainer);
        header.appendChild(roleIcon);

        // Create section to contain employee details
        const detailsSection = document.createElement("section");
        detailsSection.classList.add("employee-details");
        const detailsContainer = document.createElement("div");
        const idElement = document.createElement("p");
        idElement.textContent = "ID";
        const idSpan = document.createElement("span");
        idSpan.textContent = employee.getId();
        idElement.appendChild(idSpan);
        const emailElement = document.createElement("p");
        emailElement.textContent = "Email";
        const emailSpan = document.createElement("span");
        emailSpan.textContent = employee.getEmail();
        emailElement.appendChild(emailSpan)
        const roleElement = document.createElement("p");

        // Create a different role element based on the employee's role
        switch (employee.getRole()) {
            case "Manager":
                roleElement.textContent = "Office Number";
                const officeSpan = document.createElement("span");
                officeSpan.textContent = employee.getOfficeNumber();
                roleElement.appendChild(officeSpan);
                break;

            case "Intern":
                roleElement.textContent = "School";
                const schoolSpan = document.createElement("span");
                schoolSpan.textContent = employee.getSchool();
                roleElement.appendChild(schoolSpan);
                break;

            case "Engineer":
                roleElement.textContent = "GitHub";
                const githubLink = document.createElement("a");
                githubLink.textContent = employee.getGithub();
                githubLink.setAttribute(
                    "href",
                    `https://github.com/${employee.getGithub()}`
                );
                githubLink.setAttribute("target", "_blank")
                roleElement.appendChild(githubLink);
                break;
        }

        // Append all elements to the employee details object
        detailsContainer.appendChild(idElement);
        detailsContainer.appendChild(document.createElement("hr"));
        detailsContainer.appendChild(emailElement);
        detailsContainer.appendChild(document.createElement("hr"));
        detailsContainer.appendChild(roleElement);
        detailsSection.appendChild(detailsContainer);

        // Finally append details container and header container to the employee container, and that to main
        employeeContainer.appendChild(header);
        employeeContainer.appendChild(detailsSection);
        main.appendChild(employeeContainer);
    });

    console.log(dom.serialize());
    return dom.serialize();
}
