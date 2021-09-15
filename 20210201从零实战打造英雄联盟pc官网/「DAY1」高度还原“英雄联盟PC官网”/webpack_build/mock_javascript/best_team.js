let str = `<ul class="LPL_R_power-rank-list" id="LPL_R_best_player_C">
<li class="LPL_R_player-item">
  <div class="LPL_R_pic-player">
    <img class="player" src="//img.crawler.qq.com/lolwebvideo/20210108214024/c47d438a0f6f550717c9bf4929f36db4/0" width="151" alt="Nuguri">
    <a class="LPL_R_power-rank-role"><i class="p-top"></i></a>
    <img class="player-team-logo" src="//img.crawler.qq.com/lolwebvideo/20190908174443/f40e23c19e85c9b3c50a3ed36e84ff41/0" width="35" alt="FPX">
  </div>
  <p class="player-name">Nuguri</p>
</li>

<li class="LPL_R_player-item">
  <div class="LPL_R_pic-player">
    <img class="player" src="//img.crawler.qq.com/lolwebvideo/20210106160525/b566d49f1a15f5b87b7d44d1cbfc5951/0" width="151" alt="Weiwei">
    <a class="LPL_R_power-rank-role"><i class="p-jungle"></i></a>
    <img class="player-team-logo" src="//img.crawler.qq.com/lolwebvideo/20181224214105/448aac8501e04a27db7594cb1f441c17/0" width="35" alt="深圳V5">
  </div>
  <p class="player-name">Weiwei</p>
</li>

<li class="LPL_R_player-item">
  <div class="LPL_R_pic-player">
    <img class="player" src="//img.crawler.qq.com/lolwebvideo/20210106105824/ea4251d7a4eea448f01612f05cb4a158/0" width="151" alt="Doinb">
    <a class="LPL_R_power-rank-role"><i class="p-mid"></i></a>
    <img class="player-team-logo" src="//img.crawler.qq.com/lolwebvideo/20190908174443/f40e23c19e85c9b3c50a3ed36e84ff41/0" width="35" alt="FPX">
  </div>
  <p class="player-name">Doinb</p>
</li>

<li class="LPL_R_player-item">
  <div class="LPL_R_pic-player">
    <img class="player" src="//img.crawler.qq.com/lolwebvideo/20210106115202/3322674edc1aa3cb5b2e35de6872c5e6/0" width="151" alt="Viper">
    <a class="LPL_R_power-rank-role"><i class="p-bottom"></i></a>
    <img class="player-team-logo" src="//img.crawler.qq.com/lolwebvideo/20180925110059/69d20800d8dad53348ff74ce3d1ab737/0" width="35" alt="EDG">
  </div>
  <p class="player-name">Viper</p>
</li>

<li class="LPL_R_player-item">
  <div class="LPL_R_pic-player">
    <img class="player" src="//img.crawler.qq.com/lolwebvideo/20210106171032/54b4d19b09eb9de50a7ec1c5e4edcb40/0" width="151" alt="Missing">
    <a class="LPL_R_power-rank-role"><i class="p-sup"></i></a>
    <img class="player-team-logo" src="//img.crawler.qq.com/lolwebvideo/201712250188/69671596f47d00853d23848ed34bc278/0" width="35" alt="西安WE">
  </div>
  <p class="player-name">Missing</p>
</li>
</ul>`;

let data = [];
str.replace(/\n/g, '').replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
    let player, pic, rankRole, teamLogo;
    [, pic = ''] = /<img class="player" src="([^"]+)"/.exec($1) || [];
    pic && !pic.includes('http') ? pic = 'https:' + pic : null;

    [, teamLogo = ''] = /<img class="player-team-logo" src="([^"]+)"/.exec($1) || [];
    teamLogo && !teamLogo.includes('http') ? teamLogo = 'https:' + teamLogo : null;

    [, player = ''] = /<p class="player-name">([^<]+)<\/p>/.exec($1) || [];
    [, rankRole = 'p-top'] = /<i class="([^"]+)"><\/i>/.exec($1) || [];

    // 存储数据
    data.push({
        player,
        pic,
        rankRole,
        teamLogo
    });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));