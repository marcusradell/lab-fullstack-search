import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/", (_req, res) => {
  res.json({ status: "alive", timestamp: new Date().toISOString() });
});

export { statusRouter };
