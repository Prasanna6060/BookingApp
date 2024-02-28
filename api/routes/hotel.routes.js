import express from "express";
import { createHotel } from "../controllers/hotel.controllers.js";

const router = express.Router();

// create
router.post("/", createHotel);
// delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res, send("hwllo From delete routes");
});
// getHotels
router.get("/:id", (req, res) => {
  res.send("hello form hotels routes by id");
});
// getAllHotels
// UpdateHotels

export default router;
