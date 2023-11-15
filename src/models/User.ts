import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/db/database.db");

interface User {
  username: string;
  password: string;
}

const createUserTable = () => {
  const query = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT
        )
    `;
  db.run(query);
};

const findUser = (
  username: string,
  callback: (err: Error | null, user: User | null) => void
) => {
  const query = `
        SELECT * FROM users WHERE username = ?
    `;
  db.get(query, [username], callback);
};

export { createUserTable, findUser };
