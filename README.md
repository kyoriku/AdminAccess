<a ID="readme-top"></a>

<div align="center">

# ⭐ Final Project: HR-Module ⭐

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.w3schools.com/js/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![MySQL2 Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Express Badge](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![Dotenv Badge](https://img.shields.io/badge/Dotenv-000?style=for-the-badge&logo=javascript&logoColor=white)](https://www.npmjs.com/package/dotenv)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://www.npmjs.com/package/sequelize)
[![Handlebar Badge](https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)](https://www.npmjs.com/package/handlebars)
[![GitHub Badge](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/justinsta624/)
[![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://dashboard.heroku.com/apps)


</div>
</div>

## Goal of the Project
* Create the Human Resources module application helps to communicate changes to employment records in Human Resources Records Information System (HRRIS) 

### In General
* Essential role of projects in the journey to becoming a full-stack web developer.
* First opportunity to demonstrate collaborative skills and coding abilities to employers.
* Project serves as a focal point in the portfolio, highlighting teamwork.
* Employers seek evidence of both individual capabilities and collaboration with other developers.
* Increased chances of interviews and job offers with a portfolio featuring deployed collaborative projects.

### As a full-stack web developer
* `CRUD Operations` </div>
  Develop functionality to perform CRUD operations (Create, Read, Update, Delete) for departments, roles, managers and employees.
* `Secure Authentication`
  </div> Implement JWT-based authentication to securely authenticate admin users.
* `User Interface Design`
  </div> Design an intuitive and user-friendly interface using React components for efficient navigation and interaction.
* `Comprehensive Overview`
  </div> Provide a comprehensive overview of all departments, roles, and employees for easy access and management.
* `Data Input/Data Modification`
  </div> Allow administrators to input necessary details to create new entries for departments, roles, and employees in the database. Enable administrators to update employee roles or manager assignments to reflect accurate responsibilities and reporting structures.
* `Error Handling`
  </div> Implement robust error handling mechanisms to gracefully handle errors and provide informative error messages to users when issues occur.
  
</div>
</div>

## Screenshots

The following images show the web application's appearance and functionality:


<div align="center">

</div>
</div>


## Table of Contents

- [Goal of the Project](#Goal-of-the-Project)
- [Screenshots](#Screenshots)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Installation](#Installation)
- [Tasks](#tasks)
- [Technology Used](#technology-used)
- [Reference](#Reference)
- [License](#license)
- [Collaborators](#Collaborators)
- [Presentation](#Presentation)
- [Deployment](#Deployment)

## User Story <a ID="user-story"></a>

### This application was developed with this user story in mind:

```md
AS AN admin managing employee data
I WANT to efficiently view, add, update, and delete departments, roles, and employees
SO THAT I can maintain an organized and up-to-date employee management system
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acceptance Criteria <a ID="acceptance-criteria"></a>

### This application was developed with the below User acceptance criteria:

```md
GIVEN an employee management system web application
WHEN I log in as an admin
THEN I am securely authenticated using JWT-based authentication
WHEN I access the system
THEN I am presented with options to view, add, update, and delete departments, roles, and employees
WHEN I choose to view departments, roles, and employees
THEN I am able to see a comprehensive overview of all departments, roles, and employees
WHEN I view employees by manager or department
THEN I can see the relevant employee information grouped accordingly
WHEN I view the total department budget
THEN I see the calculated budget based on employee salaries within each department
WHEN I add a new department, role, or employee
THEN I am able to input the necessary details to create a new entry in the database
WHEN I update employee roles or manager assignments
THEN I can modify relevant information to reflect accurate responsibilities and reporting structures
WHEN I delete a department, role, or employee
THEN I can efficiently remove the selected entry from the database
WHEN I interact with the user interface
THEN I find it intuitive and user-friendly, built using React components
WHEN I navigate through different views
THEN I can move seamlessly between dashboard, add employee form, and other sections using routing
without the page reloading
WHEN I perform actions like adding, updating, or deleting data
THEN I receive confirmation dialogs to ensure intentional actions are taken
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Please follow these steps to install, refer to, contribute, or reflect our project in your work.

1. Clone -or- Fork the repository
2. Run the below in console install necessary packages
```
npm i
```
3. After NPM packages have been installed, you'll need to set up your MySQL database for the application to read and write to. Log into MySQL2:
```
mysql -u root -p
```
4. Within mysql2 - create the datbase with the schema provided, run the below command in the root folder (the below is the relative path):
```
source ./db/schema.sql
```
5. Exit MySQL2:
```
quit
```
6. Seeding -or- populating a database with necessary data
```
npm run seed
```
7. You can run start the server once packages have been installed and the database is created. Run the below in the CLI:
```
node server.js
```

HR-Module is deployed VIA following link </div>
<a href="https://gamersheim-67293fc106fb.herokuapp.com"> HEROKU </a>

## Tasks

### In General

* Refactor a fully functioning Google Books API search engine built with a RESTful API, turned it to be a GraphQL API built with Apollo Server.
* The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.
3. Create an Apollo Provider so that requests can communicate with an Apollo Server.
4. Deploy your application to Netlify

### Vite: Steps to follow

1. In the command line, navigate to the desired parent folder and run `npm create vite@latest`.
2. Enter the desired name of new project folder.
3. From the first list of options, select framework; for activities in class, we'll be using `React`.
4. From the second list of options, select variant; for activities in class, we'll be using `JavaScript`.
5. `cd` into your newly created project folder and run `npm install`.
6. Run `npm dev`/`npm run dev` and navigate to the prompted URL to see application.

### Further customization

1. Navigate to `package.json` and modify the `scripts` object so that it looks like this example:
```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used <a ID="technologies-used"></a>

- **Node.js**: Runtime environment for executing server-side JavaScript code.
- **Express**: Web application framework for building RESTful APIs.
- **MySQL2**: MySQL database driver for Node.js.
- **Sequelize**: Promise-based ORM for interacting with databases.
- **Bcrypt**: Library for securely hashing passwords.
- **Dotenv**: Utility for loading environment variables.
- **Nodemon**: Development tool for auto-reloading the server during development.
- **React**: Open-source JS library used for building user interfaces or UI components, particularly for single-page applications where user interactions are dynamic and frequent.
- **GraphQL**: Query language for APIs and a runtime environment for executing those queries against your data.
- **Apollo Provider**: Component provided by the Apollo Client library, which is a comprehensive state management library for handling GraphQL data.
- **Vite**: Build tool and development server for modern web development projects.
- **Heroku**: A cloud platform that offers easy deployment and management of web applications.

## Reference
- [Node.js & Express.js to create a RESTful API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [Handlebars.js as the Template Engine](https://handlebarsjs.com/)
- [MySQL Workbench for the Database](https://dev.mysql.com/doc/mysql-getting-started/en/)
- [GET & POST Routes for retrieving & adding New Data](https://expressjs.com/en/guide/using-middleware.html)
- [Sequelize ORM for the Database](https://sequelize.org/docs/v6/)
- [GET & POST Routes for retrieving & adding New Data](https://expressjs.com/en/guide/using-middleware.html)
- [Folder Structure with MVC Paradigm](https://docs.google.com/presentation/d/1RIA8VZVN4_JAaL0xSPf1GPc8b5dJlM5V43EVNEZ_kfA/edit#slide=id.g104b0cd1c59_0_2178)
- [Authentication and Cookies](https://github.com/expressjs/session#cookie)
- [Deployment using HEROKU](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)
- [Polished UI Tips and Tools](https://guides.codepath.com/android/Polishing-a-UI-Tips-and-Tools)
- [How to meet High-Quality Coding Standards](https://www.freecodecamp.org/news/how-to-write-clean-code/)
- [React Docs: Getting Started](https://react.dev/learn)
- [Vite Docs: Getting Started](https://vitejs.dev/guide/)
- [React Docs on JSX](https://react.dev/learn/writing-markup-with-jsx)
- [Apollo Sandbox](https://www.apollographql.com/docs/graphos/explorer/sandbox/)
- [GraphQL Queries & Mutations](https://graphql.org/learn/queries/)
- [GraphQL: Passing Arguments](https://graphql.org/graphql-js/passing-arguments/)
- [JSON Web Tokens](https://jwt.io/introduction)
- [Apollo: Authentication and authorization](https://www.apollographql.com/docs/apollo-server/security/authentication/)
- [Vite Docs on deploying with Netlify](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Collaborators
[![OzdalDogru](https://img.shields.io/badge/Ozdal-Dogru-blueviolet)](https://github.com/ozdaldogru)
[![AustinGraham](https://img.shields.io/badge/Austin-Graham-red)](https://github.com/kyoriku)
[![DanNadler](https://img.shields.io/badge/Dan-Nadler-green)](https://github.com/dannadlerp/)
[![JustinLee](https://img.shields.io/badge/Justin-Lee-magenta)](https://github.com/justinsta624)

## Presentation

[Group 5 Presentation of Project: HR-Module](https://docs.google.com/presentation/d/1xnzeLJCSkiQqjjZmUebgKcdLThbfLlPm/edit?usp=sharing&ouid=107335282898826746758&rtpof=true&sd=true)

to address the following: 
* `Elevator pitch` A one-minute description of your application.
* `Concept` What is your `user story`? What was your motivation for development?
* `Process` What were the `technologies` used? How were `tasks` and `roles` broken down and assigned? What `challenges` did you encounter? What were your `successes`?
* `Demo`: Show your `application`
* Directions for `future development`.


## Outcome

Followings are the outcomes of the project 3:

* The URL of the deployed application. </br>
[Deployed Application](https://drive.google.com/file/d/1DesRcjh71bOVOYdFWXmtrp2ilY5Ni-Oo/view) </br>

* The URL of the GitHub repository, with a unique name and a README describing the project </br>
[Repository for this Project](https://github.com/ozdaldogru/HR-Module )


## License

For details click on the following link to go to the "LICENSE" file:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)

---
© 2024 "HR-Module" by `Project 3` `Group 5`. All Rights Reserved.
