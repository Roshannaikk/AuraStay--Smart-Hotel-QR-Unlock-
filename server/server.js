const express = require("express");
const cors = require("cors");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DATABASE
const db = new sqlite3.Database("./server/database.db", (err) => {
  if (err) console.error(err.message);
  else console.log("✅ SQLite connected");
});

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ✅ IMPORT SERVICES (PASS DB)
const orderRoutes = require("../services/order-service/orderService")(db);
const userService = require("../services/user-service/user")(db);
const paymentService = require("../services/payment-service/payment")(db);
const keyService = require("../services/key-service/key")(db);

// ✅ ROUTES
app.use("/api/orders", orderRoutes);
app.use("/api/users", userService);
app.use("/api/payments", paymentService);
app.use("/api/keys", keyService);

// ✅ START SERVER
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});