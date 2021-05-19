function randomMoney() {
  return (2500 + Math.random() * 10000).toFixed(2);
}

module.exports = function (req, res) {
  const query = req.query;

  const month = query.month || '2020-12';
  const cash = parseFloat(randomMoney());
  const giftCash = parseFloat(randomMoney());
  const voucherCash = parseFloat(randomMoney());
  const total = cash + giftCash + voucherCash;

  res.json({
    status: 0,
    data: {
      month,
      total,
      cash,
      giftCash,
      voucherCash,
      isPayOut: month === '2020-12'
    }
  });
};
