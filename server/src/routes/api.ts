import { Router } from "express";
import { searchRouter } from "../features/search";

const apiRouter = Router();

apiRouter.use("/search", searchRouter);

export { apiRouter };
