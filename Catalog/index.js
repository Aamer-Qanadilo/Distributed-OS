import express from "express";
import catalogRoutes from "./routes/index.js";

const app = express();
const port = 3000;



app.use(express.json());
app.use("/catalog", catalogRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
