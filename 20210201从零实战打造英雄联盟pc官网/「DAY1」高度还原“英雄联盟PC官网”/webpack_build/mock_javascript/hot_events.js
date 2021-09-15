let str = `<ul id="J_actListContainer">
<li class="act-item">
  <img src="//ossweb-img.qq.com/images/clientpop/act/lol_1611298415_uploadnewsImg.jpg" alt="【峡谷之巅】招募令" width="193" height="207">
  <p>【峡谷之巅】招募令</p>
  
  <a class="overtime">长期活动</a>
  
  
  <div class="innerhover-border">
    <i class="hover-border-1"></i>
    <div class="innerhover-border-inner">
      <h4 class="p1">【峡谷之巅】招募令</h4>
      <p class="p2">征集优质攻略作品，奖励丰厚！</p>
      
      <p class="p2">开启时间: 2021-01-22</p>
      
    </div>
  </div>
  <a class="herf-mask" href="https://lol.qq.com/act/a20210118invite/index.html?e_code=500135" target="_blank" title="【峡谷之巅】招募令" onclick="PTTSendClick('act','act-12024','【峡谷之巅】招募令')"></a>
</li>

<li class="act-item">
  <img src="//ossweb-img.qq.com/images/clientpop/act/lol_1605435843_uploadnewsImg.jpg" alt="K/DA系列 小小英雄" width="193" height="207">
  <p>K/DA系列 小小英雄</p>
  
  <a class="overtime">长期活动</a>
  
  
  <div class="innerhover-border">
    <i class="hover-border-1"></i>
    <div class="innerhover-border-inner">
      <h4 class="p1">K/DA系列 小小英雄</h4>
      <p class="p2">使用点券可在客户端直接购买各形态1星小小英雄</p>
      
      <p class="p2">开启时间: 2020-11-13</p>
      
    </div>
  </div>
  <a class="herf-mask" href="https://lol.qq.com/act/a20201030kda/index.html?e_code=500135#cont8" target="_blank" title="K/DA系列 小小英雄" onclick="PTTSendClick('act','act-11787','K/DA系列 小小英雄')"></a>
</li>

<li class="act-item">
  <img src="//ossweb-img.qq.com/images/clientpop/act/lol_1595328110_uploadnewsImg.jpg" alt="LOL组队专区" width="193" height="207">
  <p>LOL组队专区</p>
  
  <a class="overtime">长期活动</a>
  
  
  <div class="innerhover-border">
    <i class="hover-border-1"></i>
    <div class="innerhover-border-inner">
      <h4 class="p1">LOL组队专区</h4>
      <p class="p2">无兄弟，不游戏；兄弟没空？何不妨多找几个，一起组战召唤师峡谷~冲鸭！</p>
      
      <p class="p2">开启时间: 2020-07-21</p>
      
    </div>
  </div>
  <a class="herf-mask" href="https://lol.qq.com/act/a20200319clash/index.html?e_code=500135" target="_blank" title="LOL组队专区" onclick="PTTSendClick('act','act-11365','LOL组队专区')"></a>
</li>

<li class="act-item">
  <img src="//ossweb-img.qq.com/images/clientpop/act/lol_1591017469_uploadnewsImg.jpg" alt="英雄联盟：永恒星碑" width="193" height="207">
  <p>英雄联盟：永恒星碑</p>
  
  <a class="overtime">长期活动</a>
  
  
  <div class="innerhover-border">
    <i class="hover-border-1"></i>
    <div class="innerhover-border-inner">
      <h4 class="p1">英雄联盟：永恒星碑</h4>
      <p class="p2">即刻解锁，记录你的英雄精彩时刻</p>
      
      <p class="p2">开启时间: 2020-05-29</p>
      
    </div>
  </div>
  <a class="herf-mask" href="https://lol.qq.com/act/a20200529eternals/index.html?e_code=500135" target="_blank" title="英雄联盟：永恒星碑" onclick="PTTSendClick('act','act-11170','英雄联盟：永恒星碑')"></a>
</li>
</ul>`;

let data = [];
str.replace(/\n/g, '').replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
    let title, href, pic, desc, overTime, explain, isNew, index = 0;
    [, pic = ''] = /<img src="([^"]+)"/.exec($1) || [];
    [, href = ''] = /<a class="herf-mask" href="([^"]+)"/.exec($1) || [];
    [, title = ''] = /<p>([^<]+)<\/p>/.exec($1) || [];
    [, overTime = ''] = /<a class="overtime">([^<]+)<\/a>/.exec($1) || [];
    isNew = /<i class="icon-new-1"><\/i>/.test($1);
    $1.replace(/<p class="p2">([^<]+)<\/p>/g, (_, value) => {
        index === 0 ? (desc = value || '') : (explain = value || '');
        index++;
    });
    pic && !pic.includes('http') ? pic = 'https:' + pic : null;
    href && !href.includes('http') ? href = 'https:' + href : null;

    // 存储数据
    data.push({
        title,
        href,
        pic,
        desc,
        overTime,
        explain,
        isNew
    });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));