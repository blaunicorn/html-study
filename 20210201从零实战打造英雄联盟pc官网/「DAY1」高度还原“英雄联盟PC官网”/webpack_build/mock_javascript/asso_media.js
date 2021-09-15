let str = `<ul class="partner-list-slide swiper-slide swiper-slide-visible swiper-slide-active" id="J_partnerContainer">        
<li>
  <a href="http://lol.tuwan.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener0','兔玩')">兔玩</a>
</li>
<li>
  <a href="http://lol.te5.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener1','特玩')">特玩</a>
</li>
<li>
  <a href="http://www.lolfun.cn/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener2','T-rex')">T-rex</a>
</li>
<li>
  <a href="http://www.dadianjing.cn/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener3','大电竞')">大电竞</a>
</li>
<li>
  <a href="https://gg.hupu.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener4','虎扑电竞')">虎扑电竞</a>
</li>
<li>
  <a href="http://www.loldk.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener5','大咖')">大咖</a>
</li>
<li>
  <a href="http://lol.duowan.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener6','多玩')">多玩</a>
</li>
<li>
  <a href="https://www.wanplus.com/lol/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener7','玩加电竞')">玩加电竞</a>
</li>
<li>
  <a href="http://www.famulei.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener8','伐木累')">伐木累</a>
</li>
<li>
  <a href="https://imgx.lygou.cc/cherry/lol/list" target="_blank" onclick="PTTSendClick('fanart','fanart-partener9','捞月狗')">捞月狗</a>
</li>
<li>
  <a href="http://51lol.feixiong.tv/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener10','飞熊TV')">飞熊TV</a>
</li>
<li>
  <a href="http://www.gamemei.com/yxlm/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener11','游戏魅')">游戏魅</a>
</li>
<li>
  <a href="http://www.dianjinghu.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener12','电竞虎')">电竞虎</a>
</li>
<li>
  <a href="http://l.zhangyoubao.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener13','掌游宝')">掌游宝</a>
</li>
<li>
  <a href="http://lol.uuu9.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener14','u9')">u9</a>
</li>
<li>
  <a href="http://lol.aipai.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener15','爱拍')">爱拍</a>
</li>
<li>
  <a href="http://www.lolshipin.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener16','木木不哭')">木木不哭</a>
</li>
<li>
  <a href="http://bbs.nga.cn/lol" target="_blank" onclick="PTTSendClick('fanart','fanart-partener17','NGA')">NGA</a>
</li>
<li>
  <a href="http://lol.178.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener18','178')">178</a>
</li>
<li>
  <a href="http://lol.replays.net/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener19','锐派')">锐派</a>
</li>
<li>
  <a href="http://lol.17173.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener20','17173')">17173</a>
</li>
<li>
  <a href="lpl.15w.com" target="_blank" onclick="PTTSendClick('fanart','fanart-partener22','15W')">15W</a>
</li>
<li>
  <a href="http://www.pentaq.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener23','PentaQ')">PentaQ</a>
</li>
<li>
  <a href="https://www.douyu.com/g_LOL" target="_blank" onclick="PTTSendClick('fanart','fanart-partener24','斗鱼')">斗鱼</a>
</li>
<li>
  <a href="http://www.huya.com/g/lol" target="_blank" onclick="PTTSendClick('fanart','fanart-partener25','虎牙')">虎牙</a>
</li>
<li>
  <a href="http://www.titanar.com" target="_blank" onclick="PTTSendClick('fanart','fanart-partener29','神之梯')">神之梯</a>
</li>
<li>
  <a href="http://lol.dj.sina.com.cn/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener30','新浪游戏')">新浪游戏</a>
</li>
<li>
  <a href="https://lol.chaofan.com/" target="_blank" onclick="PTTSendClick('fanart','fanart-partener31','超凡电竞')">超凡电竞</a>
</li>
</ul>`;

let data = [];
str.replace(/\n/g, '').replace(/<li>((?:(?!<\/li>).)+)/g, (_, $1) => {
    let title, href;
    [, href = '', title = ''] = /<a href="([^"]+)" target="_blank" onclick="(?:[^"]+)">([^<]+)<\/a>/.exec($1) || [];
    href && !href.includes('http') ? href = 'https:' + href : null;
    // 存储数据
    data.push({
        title,
        href
    });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));