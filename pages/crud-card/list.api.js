const data = [
  {
    title: '爱奇艺',
    avatar: '/pages/crud-card/iqiyi.jpeg',
    subDescription: '悅享品質'
  },
  {
    title: '今日头条',
    avatar: '/pages/crud-card/toutiao.jpeg',
    subDescription: '信息创造价值'
  },
  {
    title: 'Riot Games',
    avatar: '/pages/crud-card/riot-game.jpeg',
    subDescription: 'STAY HUNGRY; STAY HUMBLE'
  },
  {
    title: 'Starbucks',
    avatar: '/pages/crud-card/starbucks.jpeg',
    subDescription: 'To inspire and nurture the human spirit'
  },
  {
    title: 'Pizza Hut',
    avatar: '/pages/crud-card/pizza-hut.jpeg',
    subDescription: 'No One Outpizzas the Hut'
  },
  {
    title: '微信',
    avatar: '/pages/crud-card/wechat.jpeg',
    subDescription: '微信，是一个生活方式'
  },
  {
    title: "McDonald's",
    avatar: '/pages/crud-card/mcdonold.jpeg',
    subDescription: "I'm lovin' it"
  },
  {
    title: 'Blizzard Entertainment',
    avatar: '/pages/crud-card/blizzard.jpeg',
    subDescription:
      'Welcome To Blizzard. At Blizzard Entertainment, we pour our hearts and souls into everything we create.'
  }
];

module.exports = function (req, res) {
  const perPage = 10;
  const page = req.query.page || 1;
  let items = data.concat();

  if (req.query.keywords) {
    const keywords = req.query.keywords;
    items = items.filter(function (item) {
      return ~JSON.stringify(item).indexOf(keywords);
    });
  }

  const ret = {
    status: 0,
    msg: 'ok',
    data: {
      count: items.length,
      rows: items.concat().splice((page - 1) * perPage, perPage)
    }
  };

  res.json(ret);
};
