import { Router } from "express";
import catalogControllers from "#Catalog/controllers/index.js";

const catalogRoutes = Router();

// GET METHODS
catalogRoutes.get("/search/:topic", catalogControllers.getBooksByTopic);
catalogRoutes.get("/info/:id",catalogControllers.getBookById)

// POST METHODS
catalogRoutes.post("/info", catalogControllers.addBook);

// PUT METHODS
catalogRoutes.put("/info/:id",catalogControllers.updateBookById)

export default catalogRoutes;
