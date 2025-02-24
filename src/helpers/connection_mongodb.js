const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/mydatabase";

const db = mongoose.createConnection(uri);

db.on("connected", () => console.log("✅ Independent connection established"));
db.on("error", (err) => console.error("❌ Connection error:", err));
db.on("disconnected", () => console.log("⚠️ Disconnected"));

process.on("SIGINT", async () => {
  console.log("⚠️ Process interrupted (SIGINT). Cleaning up...");
  await db.close();
  process.exit(0);
});
module.exports = db;
