import { Router } from "express";
import catalogControllers from "#Catalog/controllers/index.js";

const catalogRoutes = Router();


catalogRoutes.get("/search/:topic", catalogControllers.getBooksByTopic);

// Informative Routes
catalogRoutes.post("/info", catalogControllers.addCatalog);
catalogRoutes.get("/info/:id",catalogControllers.getCatalogById)

export default catalogRoutes;
