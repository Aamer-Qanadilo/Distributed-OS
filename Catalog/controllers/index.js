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
};

export default catalogControllers;
