function randomMoney() {
  return parseFloat((2500 + Math.random() * 10000).toFixed(2));
}

module.exports = function (req, res) {
  const query = req.query;
  const month =
    query.month || `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
  const [year, m] = month.split('-').map(item => parseInt(item, 10));

  const len = query.range === 'year' ? 12 : 6;
  const data = [];

  for (let i = 0; i < len; i++) {
    let date = new Date(year, m - 1, 1);
    date.setMonth(date.getMonth() - i);
    data.unshift({
      total: randomMoney(),
      cash: randomMoney(),
      timestamp: `${date.getFullYear()}-${`000${date.getMonth() + 1}`.substr(
        -2
      )}`
    });
  }

  res.json({
    status: 0,
    data: {
      items: data
    }
  });
};
