import { Router } from "express";

import {
	createPurchase,
	getPurchase,
	getPurchases,
} from "controllers/purchase/index.js";

export const purchaseRouter = Router();

purchaseRouter.get("/", getPurchases);

purchaseRouter.get("/:id", getPurchase);

purchaseRouter.post("/", createPurchase);
