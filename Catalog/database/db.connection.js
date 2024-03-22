import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();

export const db = new sqlite.Database(
  "bazar.db",
  sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  }
);

const sql =
  "CREATE TABLE IF NOT EXISTS books(id INTEGER PRIMARY KEY,title,quantity,price,topic)";

db.run(sql);
