const express = require("express");
const he = require("he");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/v1/decode-html", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.status(400).json({
      error: "Input must be a string field named 'input'"
    });
  }

  const output = he.decode(input);

  res.json({ output });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
