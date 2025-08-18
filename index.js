import express from "express";
import mongoose from "mongoose";
import { MONGOURL, PORT } from "./Key.js";
import router from "./Routes/Routes.js";
import cors from "cors";

const app = express();

app.get("/api/health", (req, res) => {
  res.send("Hello World");
});

app.use(
  cors({
    origin: [
      "https://ems-frontend-cyan.vercel.app/",
      "http://localhost:5173",
      // "http://localhost:5174"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(router);

mongoose
  .connect(MONGOURL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("something wrong", err));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
