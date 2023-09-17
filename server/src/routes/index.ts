import { Router, Request, Response } from "express";
import { DB } from "../db/dataSource";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the main page!");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("About us page");
});

router.get("/projects", async (req: Request, res: Response) => {
  const projects = await DB.getRepository("projects").count();
  res.send({ projects });
});

export default router;
