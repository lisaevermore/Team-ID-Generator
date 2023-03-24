# Team-ID-Generator
### Team Profile Generator using Test-Driven Development
This is a Node.js command-line application that generates an HTML webpage to display summaries for each member of a software engineering team. It accepts user input using the provided starter code and generates an HTML file containing the team member's basic info, such as their emails and GitHub profiles.

### User Story
As a manager, I want to generate a webpage that displays my team's basic info so that I have quick access to their emails and GitHub profiles.

### Getting Started
To get started, you should:

Use Jest for running unit tests and Inquirer for collecting input from the user.
Run the application by using the following command: node index.js

### Instructions

When the user starts the application, they're prompted to enter the team manager's name, employee ID, email address, and office number. Then, the user can add an engineer, an intern, or finish building the team. When the user selects the engineer or intern option, they're prompted to enter the corresponding details, and then taken back to the menu.

When the user finishes building their team, they exit the application and the HTML is generated. The render function provided in the starter code generates a block of HTML including templated div elements for each employee. Create an HTML file using the HTML returned from the render function and write it to a file named team.html in the output folder. You can use the provided variable outputPath to target this location.

This project uses Jest for running unit tests and Inquirer for collecting input from the user. The application will be invoked by using the following command: node index.js

### Mock-Up
The generated HTML's appearance and functionality should resemble the following image: