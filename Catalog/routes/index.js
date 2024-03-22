import { Router } from "express";
import catalogControllers from "#Catalog/controllers/index.js";

const catalogRoutes = Router();

catalogRoutes.post("/", catalogControllers.addCatalog);


export default catalogRoutes;
