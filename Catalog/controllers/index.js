import { db } from "#Catalog/database/db.connection.js";

const catalogControllers = {
  addBook: (req, res) => {
    const { title, quantity, price, topic } = req.body;

    const insert = `INSERT INTO books(title,quantity,price,topic) VALUES (?,?,?,?)`;
    db.run(insert, [title, quantity, price, topic], (err) => {
      if (err) return console.error(err.message);
    });

    res.json({ message: "success", data: { title, quantity, price, topic } });
  },
  getBookById: (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM books WHERE id = ?`;
    db.get(sql, id, (err, catalog) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (!catalog) return res.status(404).json({ message: "book not found." });
      return res.status(200).json({ message: "success", data: catalog });
    });
  },
  updateBookById: (req, res) => {
    const { id } = req.params;
    const { title, quantity, price, topic } = req.body;
    const sqlSelect = `SELECT id FROM books WHERE id = ?`;
    const sqlUpdate = `UPDATE books SET title = ?, quantity = ?, price = ?, topic = ? WHERE id = ?`;
    db.get(sqlSelect, [id], (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (!row) {
        return res.status(404).json({ error: "Book not found" });
      }
      db.run(sqlUpdate, [title, quantity, price, topic, id], (err) => {
        if (err) {
          return res.status(500).json({ error: "Internal Server Error" });
        }
        return res
          .status(200)
          .json({ message: "book is updated successfully!" });
      });
    });
  },
  getBooksByTopic: (req, res) => {
    const { topic } = req.params;

    const sql = `SELECT id, title FROM books WHERE topic LIKE ?`;

    const searchTopic = `%${topic}%`;

    db.all(sql, [searchTopic], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      return res.status(200).json({ message: "success", data: rows });
    });
  },
};

export default catalogControllers;
