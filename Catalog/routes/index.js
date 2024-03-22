import { Router } from "express";
import catalogControllers from "#Catalog/controllers/index.js";

const catalogRoutes = Router();

catalogRoutes.post("/", catalogControllers.addCatalog);
catalogRoutes.get("/search/:topic", catalogControllers.getBooksByTopic);

export default catalogRoutes;
