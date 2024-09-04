import express from "express";
import { createContactController } from "../controllers/contactController.js";

const router = express.Router();

// Create Contact
router.post("/contact", createContactController);

export default router;
