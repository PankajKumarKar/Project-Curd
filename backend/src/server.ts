import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { dbConnect } from "./configs/db.config";
import curdRouter from "./routers/curd.router";
dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: ["http://localhost:4200"] }));

app.use("/api", curdRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server Running at Port No:", port);
});
