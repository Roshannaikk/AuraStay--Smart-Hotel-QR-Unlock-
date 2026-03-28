const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const { userId, room, checkin, checkout, total } = req.body;

    db.run(
      `INSERT INTO orders (userId, room, checkin, checkout, total)
       VALUES (?, ?, ?, ?, ?)`,
      [userId, room, checkin, checkout, total],
      function (err) {
        if (err) return res.status(500).json(err);
        res.json({ orderId: this.lastID });
      }
    );
  });

  return router;
};