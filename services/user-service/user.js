const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const { name, email } = req.body;

    db.run(
      `INSERT INTO users (name, email) VALUES (?, ?)`,
      [name, email],
      function (err) {
        if (err) return res.status(500).json(err);
        res.json({ userId: this.lastID });
      }
    );
  });

  return router;
};