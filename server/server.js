const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

// ✅ IMPORT SERVICES (MATCH YOUR FILE NAMES)
const userService = require('../services/user-service/user');
const orderService = require('../services/order-service/orderService'); // ✅ fixed
const paymentService = require('../services/payment-service/payment');
const keyService = require('../services/key-service/key');

const app = express();
app.use(cors());
app.use(express.json());


// ================= DATABASE =================
const db = new sqlite3.Database('./server/database.db', (err) => {
  if (err) {
    console.error("❌ DB Error:", err.message);
  } else {
    console.log("✅ Connected to SQLite database");
  }
});


// ================= CREATE TABLES =================
db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      room TEXT,
      checkin TEXT,
      checkout TEXT,
      total INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      orderId INTEGER,
      amount INTEGER,
      status TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS keys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      keyCode TEXT
    )
  `);

});


// ================= ROUTES =================
app.use('/api/users', userService(db));
app.use('/api/orders', orderService(db));
app.use('/api/payments', paymentService(db));
app.use('/api/keys', keyService(db));


// ================= TEST ROUTE =================
app.get('/', (req, res) => {
  res.send("🚀 AuraStay Backend Running with SQLite");
});


// ================= START SERVER =================
app.listen(3000, () => {
  console.log("🔥 Server running at http://localhost:3000");
});