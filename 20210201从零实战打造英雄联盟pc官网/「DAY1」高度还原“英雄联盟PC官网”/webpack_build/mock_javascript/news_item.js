let str = `<ul class="new-tab-content-ul" id="J_newsListContainer">    
<li class="first">
  <a class="item-href" target="_blank" href="https://lol.qq.com/act/a20210122lunarpresent/index.html?docid=15994097867381599545" onclick="PTTSendClick('Notice','Notice-0','2021福牛贺岁');SendEAS.sendNewsPV('index','https://lol.qq.com/act/a20210122lunarpresent/index.html?docid=15994097867381599545','15994097867381599545')">
    2021福牛贺岁
  </a>
</li>
<li class="newsitem inform">
  <span class="item-type">新闻</span>
  <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=12717294699245043737" onclick="PTTSendClick('Notice','Notice-1','问拳头：开发者的教训');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=12717294699245043737','12717294699245043737')">
    问拳头：开发者的教训
  </a>
  <span class="item-time">01-29</span>
</li>
<li class="newsitem inform">
  <span class="item-type">新闻</span>
  <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=13940307264722707250" onclick="PTTSendClick('Notice','Notice-2','英雄剖析：佛耶戈');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=13940307264722707250','13940307264722707250')">
    英雄剖析：佛耶戈
  </a>
  <span class="item-time">01-22</span>
</li>
<li class="newsitem inform">
  <span class="item-type">公告</span>
  <a class="item-href" target="_blank" href="http://lol.qq.com/gicp/news/410/34169937.html?docid=4402722715588382486" onclick="PTTSendClick('Notice','Notice-3','11.2版本更新公告：破败之王佛耶戈登场！');SendEAS.sendNewsPV('index','http://lol.qq.com/gicp/news/410/34169937.html?docid=4402722715588382486','4402722715588382486')">
    11.2版本更新公告：破败之王佛耶戈登场！
  </a>
  <span class="item-time">01-20</span>
</li>
<li class="newsitem inform">
  <span class="item-type">新闻</span>
  <a class="item-href" target="_blank" href="//lol.qq.com/news/detail.shtml?docid=5530130789669444555" onclick="PTTSendClick('Notice','Notice-4','命运之轮云顶宝典第II期 现已开启');SendEAS.sendNewsPV('index','//lol.qq.com/news/detail.shtml?docid=5530130789669444555','5530130789669444555')">
    命运之轮云顶宝典第II期 现已开启
  </a>
  <span class="item-time">01-20</span>
</li>
<li class="newsitem inform">
  <span class="item-type">公告</span>
  <a class="item-href" target="_blank" href="http://lol.qq.com/gicp/news/662/34169900.html?docid=6920871485613967820" onclick="PTTSendClick('Notice','Notice-5','云顶之弈命运之轮季中更新：欢迎来到瑞兽闹新春');SendEAS.sendNewsPV('index','http://lol.qq.com/gicp/news/662/34169900.html?docid=6920871485613967820','6920871485613967820')">
    云顶之弈命运之轮季中更新：欢迎来到瑞兽闹新春
  </a>
  <span class="item-time">01-20</span>
</li>
<li class="newsitem amusement">
  <span class="item-type">视频</span>
  <a class="item-href" target="_blank" href="//lol.qq.com/v/v2/detail.shtml?docid=16022278354372868652" onclick="PTTSendClick('Notice','Notice-6','【云顶之弈】福牛俱乐部棋盘 DJ牛在线打碟');SendEAS.sendNewsPV('index','//lol.qq.com/v/v2/detail.shtml?docid=16022278354372868652','16022278354372868652')">
    【云顶之弈】福牛俱乐部棋盘 DJ牛在线打碟
  </a>
  <span class="item-time">01-20</span>
</li>
</ul>`;

let data = [];
str.replace(/\n/g, '').replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
  let title, href, time, type;
  [, href = '', title = ''] = /<a class="item-href" target="_blank" href="([^"]+)" (?:[^>]+)>([^<]+)<\/a>/.exec($1) || [];
  [, type = '新闻'] = /<span class="item-type">([^<]+)<\/span>/.exec($1) || [];
  [, time = ''] = /<span class="item-time">([^<]+)<\/span>/.exec($1) || [];

  href && !href.includes('http') ? href = 'https:' + href : null;
  title ? title = title.trim() : null;

  // 存储数据
  data.push({
    title,
    href,
    time,
    type
  });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));