exports.scanCode = (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.json({ message: "❌ No code provided" });
  }

  if (code.startsWith("AUR-")) {
    res.json({ message: "🚪 Door Unlocked" });
  } else {
    res.json({ message: "❌ Invalid Key" });
  }
};