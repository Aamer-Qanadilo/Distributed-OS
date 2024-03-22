import express from "express";

import { config } from "dotenv";
import orderRoutes from "./routes/index.js";

config({
  path: "../.env",
});

const app = express();
const port = process.env.PORT_ORDER || 4000;

app.use(express.json());
app.use("/order", orderRoutes);

app.use("*", (req, res) => {
  res.json({ message: "invalid endpoint" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
