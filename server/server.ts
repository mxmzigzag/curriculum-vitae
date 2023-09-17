import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { DB } from "./src/db/dataSource";
import router from "./src/routes";

dotenv.config();

DB.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
