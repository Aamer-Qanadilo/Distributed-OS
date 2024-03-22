import { Router } from "express";
import orderControllers from "#Order/controllers/index.js";

const orderRoutes = Router();

// POST METHODS
orderRoutes.post("/purchase/:id", orderControllers.purchaseBook);

export default orderRoutes;
