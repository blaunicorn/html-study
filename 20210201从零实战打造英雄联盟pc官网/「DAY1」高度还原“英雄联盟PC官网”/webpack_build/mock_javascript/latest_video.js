let str = `<ul class="fresh-video-content" id="J_flashVideoContainer">
<li class="video-item" data-vid="b3224akdh2y">
  <!--视频图片-->
  <div class="mask-img">
    <img src="//puui.qpic.cn/vpic/0/b3224akdh2y.png/0" class="video-cover" width="198" height="110" alt="Miss排位日记第622期 新英雄破败之王！星蚀佛耶戈">
    <span class="btn-play-1"><i></i><a></a></span>
    <div class="video-pre-wrap" style="display:none">
      <img class="video-pre-img" width="198" height="110">
      <span class="video-pre-bg"></span>
      <span class="video-pre-bar"><i></i></span>
    </div>
    <a href="//lol.qq.com/v/v2/detail.shtml?docid=15785251185830606869" target="_blank" class="herf-mask" onclick="PTTSendClick('newVideo','newVideo-15785251185830606869','Miss排位日记第622期 新英雄破败之王！星蚀佛耶戈');SendEAS.sendVideoPV('index','//lol.qq.com/v/v2/detail.shtml?docid=15785251185830606869','15785251185830606869')"></a>
  </div>
  <a class="video-length">16:57</a>
  <p class="name-video">
    <a href="//lol.qq.com/v/v2/detail.shtml?docid=15785251185830606869" target="_blank" onclick="PTTSendClick('newVideo','newVideo-15785251185830606869','Miss排位日记第622期 新英雄破败之王！星蚀佛耶戈');SendEAS.sendVideoPV('index','//lol.qq.com/v/v2/detail.shtml?docid=15785251185830606869','15785251185830606869')">
    Miss排位日记第622期 新英雄破败之王！星蚀佛耶戈</a>
  </p>
  <a class="play-times">2.9万次播放</a>
  <a class="update-time">13小时前</a>
</li>
......
</ul>`;

let index = -1,
    data = [];
str = str.replace(/\n/g, '');
str.replace(/<li class="video-item" data-vid="(\w+)">((?:(?!<\/li>).)+)/g, (_, $1, $2) => {
    index++;
    let reg1 = /<img src="([^"]+)" class="video-cover" width="\d+" height="\d+" alt="([^"]+)">/g,
        reg2 = /docid=(\d+)/,
        reg3 = /<a class="play-times">([^<]+)<\/a>/,
        reg4 = /<a class="update-time">([^<]+)<\/a>/,
        reg5 = /<a class="video-length">([^<]+)<\/a>/,
        reg6 = /<img class="video-pre-img" width="\d+" height="\d+" src="([^"]+)">/,
        [, pic, title] = reg1.exec($2),
        [, id] = reg2.exec($2),
        [, playTimes] = reg3.exec($2),
        [, updateTime] = reg4.exec($2),
        [, videoLength] = reg5.exec($2);
    if (!pic.includes('http')) pic = 'https:' + pic;

    let item = {
        id,
        pic,
        title,
        playTimes,
        updateTime,
        videoLength
    };
    if (reg6.test($2)) {
        item.background = [];
        let n = 1;
        for (; n <= 8; n++) {
            item.background.push(`https://puui.qpic.cn/vpic/0/${$1}_640_360_${n}.jpg/0`);
        }
    }
    data.push(item);
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));