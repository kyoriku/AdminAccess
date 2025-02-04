# AdminAccess
*A full-stack MERN application that provides administrators with a secure and intuitive platform for managing employee data, roles, and departments*

## Built With
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://www.npmjs.com/package/sequelize)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## Table of Contents
- [Description](#description)
  - [Deployed Site](#deployed-site)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technical Details](#technical-details)
- [Installation](#installation)
- [Usage](#usage)
- [Developers](#developers)
- [License](#license)
- [Questions](#questions)

## Description
AdminAccess is a robust employee management system built using the MERN stack (MySQL, Express, React, Node). This platform provides administrators with a secure and efficient way to manage organizational data through an intuitive interface. Built with modern JavaScript practices and a secure authentication system, the application offers comprehensive CRUD operations for managing employees, roles, and departments.

The application leverages React for a responsive frontend experience, Express.js for efficient routing, and MySQL with Sequelize ORM for reliable data management. With features like secure authentication, real-time updates, and intuitive data management interfaces, AdminAccess streamlines administrative tasks while maintaining data integrity and security.

### Deployed Site
Visit the live website at: [https://adminaccess-f697b23e85fa.herokuapp.com](https://adminaccess-f697b23e85fa.herokuapp.com)

## Features
* **Administrator Authentication**
  * Secure login system
  * Protected administrative routes
  * Session management
  * Access control for sensitive operations
  * Automatic timeout security

* **Employee Management**
  * Add new employees with role assignment
  * Update employee information
  * Delete employee records
  * View employee details and history
  * Manager assignment capabilities

* **Role & Department Control**
  * Create and modify departments
  * Define and update role descriptions
  * Manage salary information
  * Department budget tracking
  * Role hierarchy management

* **User Interface**
  * Intuitive dashboard layout
  * Confirmation dialogs for critical actions
  * Real-time data updates
  * Responsive design across devices
  * Error handling with user feedback

## Screenshots
![Homepage](client/public/screenshots/adminaccess-homepage.jpg)
![Employees](client/public/screenshots/adminaccess-empoyees.jpg)
![Add-Employee](client/public/screenshots/adminaccess-add-employee.jpg)
![Edit-Employee](client/public/screenshots/adminaccess-edit-employee.jpg)
![Delete-Employee](client/public/screenshots/adminaccess-delete-employee.jpg)

## Technical Details
This platform was built using the following technologies and features:

* **React Frontend**: Component-driven architecture:
   * Hooks-based state management (useState, useEffect)
   * Protected routes with HOC pattern
   * Bootstrap UI framework integration
   * Form validation with real-time feedback
   * Modal-based user interactions

* **Express Backend**: RESTful API implementation:
   * Blueprint-based route organization
   * withAuth middleware for route protection
   * Error handling with status codes
   * Transaction management with rollbacks
   * Session-based state persistence

* **Database Architecture**: MySQL with Sequelize ORM:
   * User model with bcrypt password hashing
   * Department and Role model relationships
   * Employee and Manager model validations
   * Cascading deletes configuration
   * One-to-many relationship management

* **Authentication System**: 
   * Email and password validation
   * Bcrypt password encryption
   * Session-based user tracking
   * Protected route middleware
   * Automatic session timeout

* **Data Management**: 
   * CSV export functionality
   * Dynamic search filtering
   * Data deletion safeguards
   * Real-time data updates
   * Relationship integrity checks

## Installation
### Prerequisites:
* Node.js
* npm (Node Package Manager)
* MySQL

### Setup:
1. **Clone the Repository**
   ```bash
   git clone https://github.com/kyoriku/AdminAccess.git 
   cd AdminAccess
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the server directory with:
   ```bash
   DB_NAME='your_database_name'
   DB_USER='your_MySQL_username'
   DB_PASSWORD='your_MySQL_password'
   SESSION_SECRET='your_session_secret'
   ADMIN_USERNAME='your_admin_username'
   ADMIN_EMAIL='your_admin_email_address'
   ADMIN_PASSWORD='your_admin_password'
   ```

4. **Initialize Database**
   ```sql
   mysql -u root -p
   source db/schema.sql
   ```

5. **Seed the Database**
   ```bash
   npm run seed
   ```

## Usage
1. **Start the application**
   ```bash
   npm run develop
   ```

2. **Navigate to the website**
   ```bash
   http://localhost:3000
   ```

3. **Access admin features:**
   * Manage employee records
   * Update roles and departments
   * View organizational structure
   * Generate reports and analytics

## Developers
* [![kyoriku](https://img.shields.io/badge/kyoriku-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kyoriku) - Lead Developer: Full-Stack Architecture, Database Implementation, Authentication & Error Systems
* [![ozdaldogru](https://img.shields.io/badge/ozdaldogru-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ozdaldogru) - Frontend Development, Form Implementation, UI Features
* [![dannadlerp](https://img.shields.io/badge/dannadlerp-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dannadlerp) - Backend Support
* [![justinsta624](https://img.shields.io/badge/justinsta624-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/justinsta624) - Frontend Support

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license - see the LICENSE file for details.

## Questions
For any questions, feel free to email me at devkyoriku@gmail.com.