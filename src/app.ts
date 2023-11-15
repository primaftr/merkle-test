import express from "express";
import bodyParser from "body-parser";
import guestRoutes from "./routes/guestRoutes";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use("/api", guestRoutes);
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
