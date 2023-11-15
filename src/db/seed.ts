// seed.ts
import sqlite3 from "sqlite3";
import { createUserTable } from "../models/User";
import bcrypt from "bcrypt";

const db = new sqlite3.Database("./src/db/database.db");
createUserTable();

// Seed admin user
const adminUsername = "admin";
const adminPassword = "adminpassword";

const seedAdminUser = () => {
  bcrypt.hash(adminPassword, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err.message);
      db.close();
    } else {
      const query = `
                INSERT INTO users (username, password)
                VALUES (?, ?)
            `;
      db.run(query, [adminUsername, hashedPassword], (err) => {
        if (err) {
          console.error("Error seeding admin user:", err.message);
        } else {
          console.log("Admin user seeded successfully");
        }
        db.close();
      });
    }
  });
};

seedAdminUser();
