module.exports = {
  success: (req, res, message, status) => {
    res.status(status || 200).json({ message });
  },
  error: (req, res, error, status, log) => {
    if (log) console.log(log);
    res.status(status || 500).json({ error });
  },
};
