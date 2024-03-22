import { db } from "#Catalog/database/db.connection.js";

const catalogControllers = {
  addCatalog: (req, res) => {
    const { title, quantity, price, topic } = req.body;

    const insert = `INSERT INTO books(title,quantity,price,topic) VALUES (?,?,?,?)`;
    db.run(insert, [title, quantity, price, topic], (err) => {
      if (err) return console.error(err.message);
    });

    res.json({ message: "success", data: { title, quantity, price, topic } });
  },
  getCatalogById: (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM books WHERE id = ?`;
    db.get(sql, id, (err, catalog) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (!catalog) return res.status(404).json({ message: "Not Found" });
      return res.status(200).json({ message: "success", data: catalog });
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
