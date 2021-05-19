function randomMoney() {
  return (2500 + Math.random() * 10000).toFixed(2);
}

function mockItem(product) {
  const cash = parseFloat(randomMoney());
  const giftCash = parseFloat(randomMoney());
  const voucherCash = parseFloat(randomMoney());
  const total = parseFloat((cash + giftCash + voucherCash).toFixed(2));

  return {
    cash,
    giftCash,
    voucherCash,
    total,
    product,
    diff: (Math.round(Math.random() * 20) - 10) / 100,
    sparkData: [
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10)
    ]
  };
}

module.exports = function (req, res) {
  const query = req.query;

  const data = [
    mockItem('云服务器CVM'),
    mockItem('内容分发网络CDN'),
    mockItem('全站加速网站ECDN'),
    mockItem('COS 对象存储'),
    mockItem('弹性 MapReducer')
  ];

  res.json({
    status: 0,
    data: {
      detail_cost: data
    }
  });
};
