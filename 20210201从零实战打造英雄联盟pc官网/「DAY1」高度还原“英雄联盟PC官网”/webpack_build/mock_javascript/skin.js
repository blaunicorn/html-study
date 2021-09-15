let str = `<ul id="J_moreNewSkinContainer">
            
<li class="more-skin-item" style="margin-right:12px">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_bcac469061d55d3be83e6ec2bfab55fc/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">光明&amp;黑暗 骑士</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20210108WardenandMarauder/index.html" title="光明&amp;黑暗 骑士" onclick="PTTSendClick('moreskin','moreskin-0','光明&amp;黑暗 骑士')"></a>
</li>


<li class="more-skin-item">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_c912b0e7052880fdd0d2003e308795f4/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">女帝</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20201211battlequeen/index.html" title="女帝" onclick="PTTSendClick('moreskin','moreskin-1','女帝')"></a>
</li>


<li class="more-skin-item">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_0eea666f3600e161db82b736654612a5/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">永恒之森</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20201211elderwood/index.html?e_code=500135" title="永恒之森" onclick="PTTSendClick('moreskin','moreskin-2','永恒之森')"></a>
</li>


<li class="more-skin-item">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_811ec7ef21b4ecf792761998df307074/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">星界</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20201126cosmic/index.html" title="星界" onclick="PTTSendClick('moreskin','moreskin-3','星界')"></a>
</li>


<li class="more-skin-item">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_c069cb415acfaede4e07f0b8b61a6ef3/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">抵抗军VS战地机甲</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20201113resistance/index.html?e_code=443433" title="抵抗军VS战地机甲" onclick="PTTSendClick('moreskin','moreskin-4','抵抗军VS战地机甲')"></a>
</li>


<li class="more-skin-item">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_5bcf40897dd4ec591fe382a769d2cbca/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">K/DA ALL OUT</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20201030kda/index.html" title="K/DA ALL OUT" onclick="PTTSendClick('moreskin','moreskin-5','K/DA ALL OUT')"></a>
</li>


<li class="more-skin-item">
  
  <img src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_225847e68adde82788f5bba0dc50bdaf/0" width="185" height="117" alt="$value.title">
  <p class="skinname">
    <a class="a2">峡谷传说2020</a>
  </p>
  <a class="herf-mask" target="_blank" href="https://lol.qq.com/act/a20201023talesfromrift/index.html" title="峡谷传说2020" onclick="PTTSendClick('moreskin','moreskin-6','峡谷传说2020')"></a>
</li>
</ul>`;

let data = [];
str.replace(/\n/g, '').replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
    let skin, href, pic;
    [, pic = ''] = /<img src="([^"]+)"/.exec($1) || [];
    [, href = ''] = /<a class="herf-mask" target="_blank" href="([^"]+)"/.exec($1) || [];
    [, skin = ''] = /<a class="a2">([^<]+)<\/a>/.exec($1) || [];
    pic && !pic.includes('http') ? pic = 'https:' + pic : null;
    href && !href.includes('http') ? href = 'https:' + href : null;
    
    // 存储数据
    data.push({
        skin,
        pic,
        href
    });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));