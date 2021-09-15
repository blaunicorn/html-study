let str = `<ul class="promo-img-list" id="promoImgList" t-clicked="true" style="width: 4100px; margin-left: -3280px;"><li class="promo-item">            <a href="https://lol.qq.com/act/a20210122lunarpresent/index.html?e_code=500130" target="_blank" onclick="PTTSendClick('indexScroll','scroll-22029','2021福牛贺岁');">              <img t-chan="15282:22029" t-adid="10527465" src="//ossweb-img.qq.com/upload/adw/image/20210128/2304a49680e31f18e780f3f9920df89f.jpeg" width="820" height="340" alt="2021福牛贺岁">            </a>                      </li>                    <li class="promo-item">            <a href="https://lol.qq.com/act/a20210129shanhai/index.html?e_code=500131" target="_blank" onclick="PTTSendClick('indexScroll','scroll-22128','山海绘卷');">              <img t-chan="15282:22128" t-adid="10527510" src="//ossweb-img.qq.com/upload/adw/image/20210129/e440e62713f57cd970d93c4b9f86166b.jpeg" width="820" height="340" alt="山海绘卷">            </a>                      </li>                    <li class="promo-item">            <a href="https://lol.qq.com/act/a20210122ruined/index.html?e_code=500132" target="_blank" onclick="PTTSendClick('indexScroll','scroll-22129','破败军团');">              <img t-chan="15282:22129" t-adid="10527304" src="//ossweb-img.qq.com/upload/adw/image/20210122/1f8f8a60b688ce5c6691d2bd2ef8d4dc.jpeg" width="820" height="340" alt="破败军团">            </a>                      </li>                    <li class="promo-item">            <a href="https://lol.qq.com/act/a20210108newseason/index.html?e_code=500133" target="_blank" onclick="PTTSendClick('indexScroll','scroll-22130','2021新赛季 新征程');">              <img t-chan="15282:22130" t-adid="10527191" src="//ossweb-img.qq.com/upload/adw/image/20210108/a73a29316dcb06e7d4d1aa402bf3d05d.jpeg" width="820" height="340" alt="2021新赛季 新征程">            </a>                      </li>                    <li class="promo-item">            <a href="https://lol.qq.com/act/a20210115akl/index.html?e_code=500134" target="_blank" onclick="PTTSendClick('indexScroll','scroll-22131','阿卡丽的黑金商店');">              <img t-chan="15282:22131" t-adid="10527269" src="//ossweb-img.qq.com/upload/adw/image/20200814/18012dfa6cf22ae1cf02d524310f9b80.jpeg" width="820" height="340" alt="阿卡丽的黑金商店">            </a>                      </li>          </ul>`;

let data = [];
str.replace(/\n/g, '').replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
  let title, href, pic;
  [, pic = '', title = ''] = /<img t-chan="(?:[^"]+)" t-adid="(?:[^"]+)" src="([^"]+)" width="(?:[^"]+)" height="(?:[^"]+)" alt="([^"]+)">/.exec($1) || [];
  [, href = ''] = /<a href="([^"]+)"/.exec($1) || [];

  pic && !pic.includes('http') ? pic = 'https:' + pic : null;
  href && !href.includes('http') ? href = 'https:' + href : null;

  // 存储数据
  data.push({
    title,
    href,
    pic
  });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));