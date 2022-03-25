module.exports = response = (res, status, message) => {
  return res.status(status).json({
    status,
    message,
  });
};
