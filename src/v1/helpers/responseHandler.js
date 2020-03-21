export default (req, res, message, status, data) => {
  res.status(status).json({
    message,
    data
  });
};


