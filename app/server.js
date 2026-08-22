const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const prNumber = process.env.PR_NUMBER || "local";

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Ephemeral Preview Environment</h1>
    <p>Running in PR environment: <b>pr-${prNumber}</b></p>
    <p>This is our GitOps workshop application.</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    pr: prNumber
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Application running on port ${port}`);
});