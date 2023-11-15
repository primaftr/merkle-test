import express, { Request, Response } from "express";
import { createGuestTable, addGuest, getAllGuests } from "../models/Guest";
import { verifyToken } from "../middleware/authMiddleware";

createGuestTable();

const router = express.Router();

const validateGuest = (req: Request, res: Response, next: () => void) => {
  const { name, phoneNumber, note } = req.body;

  // Check if required fields are present
  if (!name || !phoneNumber || !note) {
    return res
      .status(400)
      .json({ message: "name, phoneNumber, and note are required fields" });
  }

  next();
};

// Guest Form
router.post("/guests", validateGuest, (req: Request, res: Response) => {
  const guest = req.body;
  addGuest(guest);
  res.json({ message: "Guest added successfully" });
});

// Note Gallery
router.get("/notes", verifyToken, (req: Request, res: Response) => {
  getAllGuests((err, rows) => {
    if (err) throw err;
    const response = rows.map((row) => {
      return {
        name: row.name,
        address: req.user ? row.address : undefined, // Include address if authenticated
        phoneNumber: req.user ? row.phoneNumber : undefined, // Include phoneNumber if authenticated
        note: row.note,
      };
    });
    res.json(response);
  });
});

export = router;
