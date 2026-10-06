// api: a small Express service that the web app in ../web calls.
// GET /        -> which service answered, its version and the time
// GET /health  -> { status: "ok" }
import cors from "cors";
import express from "express";

const PORT = process.env.PORT || 8080;
const VERSION = 2;

const app = express();
// The data is public and read-only, so any website may call this API.
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.json({ service: "api", version: VERSION, time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`api listening on port ${PORT}`);
});
