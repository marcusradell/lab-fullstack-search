import express from "express";
import { statusRouter } from "./routes/status";
import { apiRouter } from "./routes/api";

const app = express();
const port = 3000;

app.use("/", statusRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
