import express from "express";
import cors from "cors";
import { connecDB } from "./config/db.js";
import foodrouter from "./routes/foodroute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/food", foodrouter);
// DB Connection
connecDB();

// apis
app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log("server listening on port", port);
});
