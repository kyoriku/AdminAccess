# AdminAccess
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)

## Built With
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
[![MySQL2](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Express.js](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://www.npmjs.com/package/sequelize)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)](https://www.npmjs.com/package/axios)
[![Bcrypt](https://img.shields.io/badge/Bcrypt-338?style=for-the-badge&logo=javascript&logoColor=white)](https://www.npmjs.com/package/bcrypt)
[![Dotenv](https://img.shields.io/badge/Dotenv-000?style=for-the-badge&logo=javascript&logoColor=white)](https://www.npmjs.com/package/dotenv)
[![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)](https://www.npmjs.com/package/nodemon)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)](https://dashboard.heroku.com/apps)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/justinsta624/)

## Description
AdminAccess is a comprehensive employee data management solution designed for administrators, built with the MERN stack (MySQL, Express, React, Node). It ensures secure authentication and intuitive interface interactions. Administrators can securely log in and access options to view, add, update, and delete departments, roles, employees, and managers. They can add new entries, update roles, and delete data with confirmation dialogs to prevent accidental deletion. The application offers seamless navigation and a user-friendly interface, enhancing productivity and data management efficiency. Overall, AdminAccess provides a robust solution for organizations to manage their employee data effectively, focusing on security, efficiency, and user experience.

## Table of Contents
1. [Description](#description)
2. [Deployment](#deployment)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Screenshots](#screenshots)
6. [Collaborators](#collaborators)
7. [License](#license)
8. [Questions](#questions)


## Deployment
AdminAccess is deployed on Heroku. You can access the live application [here](https://adminaccess-f697b23e85fa.herokuapp.com/).

## Installation
To get started with AdminAccess, follow these steps:

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/kyoriku/AdminAccess.git
    ```

2. Navigate to the project directory.
    ```bash
    cd AdminAccess
    ```

3. Install the required dependencies for both the client (front-end) and server (back-end) sides.
    ```bash
    npm install
    ```

4. Create a `.env` file in the server directory and fill in your database credentials.
    ```bash
    DB_NAME='your_database_name'
    DB_USER='your_MySQL_username'
    DB_PASSWORD='your_MySQL_password'
    SESSION_SECRET='your_session_secret'
    ADMIN_USERNAME='your_admin_username'
    ADMIN_EMAIL='your_admin_email_address'
    ADMIN_PASSWORD='your_admin_password'
    ```

5. Set up MySQL database.
    - **Using MySQL Workbench:**
      - Open MySQL Workbench and connect to your MySQL server.
      - Create a new schema/database (if it doesn't exist already) by clicking on the "Create a new schema in the connected server" icon or through the "File" > "New Model" menu.
      - Name the schema/database with the desired name, e.g., `your_database_name`.
      - Execute the schema provided in the `db/schema.sql` file within the created schema/database to set up the necessary tables and structure.

    - **Using MySQL Command Line:**
      - Log into MySQL and create the necessary database by executing the schema provided in the `db/schema.sql` file. Replace `<username>` with your MySQL username.
      ```bash
      mysql -u <username> -p
      source db/schema.sql
      quit 
      ```

6. Seed the database.
    ```bash
    npm run seed
    ```

## Usage
1. Once dependencies are installed, the environment variables are created, and the database is set up: navigate to the root directory of the project and start the server.
    ```bash
    npm run develop
    ```
    This command initiates both the server and client development environments concurrently. It will launch the development server and open AdminAccess in your default web browser. If not, navigate to http://localhost:3000 in your browser.

## Screenshots
![login](./client/public/images/1-login.jpg)
![departments-list](./client/public/images/2-departments-list.jpg)
![add-department](./client/public/images/3-add-department.jpg)
![edit-department](./client/public/images/4-edit-department.jpg)
![delete-department](./client/public/images/5-delete-department.jpg)
![roles-list](./client/public/images/6-roles-list.jpg)
![add-role](./client/public/images/7-add-role.jpg)
![edit-role](./client/public/images/8-edit-role.jpg)
![delete-role](./client/public/images/9-delete-role.jpg)
![employees-list](./client/public/images/10-employees-list.jpg)
![add-employee](./client/public/images/11-add-employee.jpg)
![edit-employee](./client/public/images/12-edit-employee.jpg)
![delete-employee](./client/public/images/13-delete-employee.jpg)
![managers-list](./client/public/images/14-managers-list.jpg)
![add-manager](./client/public/images/15-add-manager.jpg)
![edit-manager](./client/public/images/16-edit-manager.jpg)
![delete-manager](./client/public/images/17-delete-manager.jpg)

## Collaborators
[![OzdalDogru](https://img.shields.io/badge/Ozdal-Dogru-blueviolet.svg?style=for-the-badge&logo=DOGRU)](https://github.com/ozdaldogru)
[![AustinGraham](https://img.shields.io/badge/Austin-Graham-red.svg?style=for-the-badge&logo=GRAHAM)](https://github.com/kyoriku)
[![DanNadler](https://img.shields.io/badge/Dan-Nadler-green.svg?style=for-the-badge&logo=NADLER)](https://github.com/dannadlerp)
[![JustinLee](https://img.shields.io/badge/Justin-Lee-magenta.svg?style=for-the-badge&logo=LEE)](https://github.com/justinsta624)

## License
This application is covered by the [MIT](https://opensource.org/licenses/MIT) license.

## Questions
If you have any questions, please do not hesitate to reach out: devkyoriku@gmail.com.

---

© 2024 "AdminAccess" by [Ozdal](ttps://github.com/ozdaldogru), [Austin](https://github.com/kyoriku), [Dan](https://github.com/dannadlerp), & [Justin](https://github.com/justinsta624). All Rights Reserved.
