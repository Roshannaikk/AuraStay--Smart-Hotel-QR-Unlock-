const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const { userId } = req.body;

    const keyCode = "AUR-" + Math.floor(1000 + Math.random() * 9000);

    db.run(
      `INSERT INTO keys (userId, keyCode) VALUES (?, ?)`,
      [userId, keyCode],
      function (err) {
        if (err) return res.status(500).json(err);
        res.json({ keyCode });
      }
    );
  });

  return router;
};