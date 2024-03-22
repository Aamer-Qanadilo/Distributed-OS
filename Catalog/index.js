import express from "express";
import catalogRoutes from "./routes/index.js";
import { config } from "dotenv";

config({
  path: "../.env",
});

const app = express();
const port = process.env.PORT_CATALOG || 3000;

app.use(express.json());
app.use("/catalog", catalogRoutes);

app.use("*", (req, res) => {
  res.json({ message: "invalid endpoint" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
