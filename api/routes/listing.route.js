import { createListing } from "../controllers/listing.controller.js";
import express from 'express'
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, createListing)