const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const { orderId, amount } = req.body;

    db.run(
      `INSERT INTO payments (orderId, amount, status)
       VALUES (?, ?, ?)`,
      [orderId, amount, "SUCCESS"],
      function (err) {
        if (err) return res.status(500).json(err);
        res.json({ paymentId: this.lastID });
      }
    );
  });

  return router;
};