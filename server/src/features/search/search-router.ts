import { Router } from "express";

const searchRouter = Router();

searchRouter.get("/", (_req, res) => {
  res.json({ message: "Search endpoint" });
});

export { searchRouter };
