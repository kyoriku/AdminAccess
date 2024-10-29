const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedDepartments = require("./departmentData");
const seedRoles = require("./roleData");
const seedEmployees = require("./employeeData");
const seedManagers = require("./managerData");

const seedDatabase = async () => {
  try {
    // Drop all tables first
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true }); // This will recreate all tables
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    await seedDepartments();
    console.log("\n----- DEPARTMENTS SEEDED -----\n");

    await seedRoles();
    console.log("\n----- ROLES SEEDED -----\n");

    await seedEmployees();
    console.log("\n----- EMPLOYEES SEEDED -----\n");

    await seedManagers();
    console.log("\n----- MANAGERS SEEDED -----\n");

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close(); // Close the connection when done
    process.exit(0);
  }
};

seedDatabase();
