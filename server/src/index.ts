import express from "express";
const app = express();
const port = 3000;

app.get("/status", (_req, res) => {
  res.json({ status: "alive", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
