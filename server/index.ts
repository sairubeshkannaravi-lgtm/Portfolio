import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, "..", "dist", "public")));

// Serve index.html for all other routes (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "public", "index.html"));
});

// Use PORT from environment or default to 5000
const port = parseInt(process.env.PORT || "5000", 10);
app.listen(port, () => {
  console.log(`Static server running on port ${port}`);
});