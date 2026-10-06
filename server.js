const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    app: "Ethio Bonus 2026"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Ethio Bonus running on port ${PORT}`);
});
