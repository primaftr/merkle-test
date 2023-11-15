import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/db/database.db");

interface Guest {
  name: string;
  address: string;
  phoneNumber: string;
  note: string;
}

const createGuestTable = () => {
  const query = `
        CREATE TABLE IF NOT EXISTS guests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            address TEXT,
            phoneNumber TEXT,
            note TEXT
        )
    `;
  db.run(query);
};

const addGuest = (guest: Guest) => {
  const query = `
        INSERT INTO guests (name, address, phoneNumber, note)
        VALUES (?, ?, ?, ?)
    `;
  const { name, address, phoneNumber, note } = guest;
  db.run(query, [name, address, phoneNumber, note]);
};

const getAllGuests = (callback: (err: Error | null, rows: any[]) => void) => {
  const query = `
        SELECT * FROM guests
    `;
  db.all(query, callback);
};

export { createGuestTable, addGuest, getAllGuests };
