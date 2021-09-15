let str = ``;

let data = [];
str.replace(/\n/g, '').replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
    let state, matchTime, type, schedule, homeLogo, homeName, homeScore, guestLogo, guestName, guestScore,
        href = "";
    $1.replace(/<p class="gamelist-item-topbar (?:over|wait)">((?:(?!<\/p>).)+)/, (_, str) => {
        let arr = [];
        str.replace(/<span class="(?:[^"]+)">([^<]+)<\/span>/g, (_, value) => {
            arr.push(value);
        });
        state = arr[0];
        matchTime = `${arr[2]} ${arr[1]}`;
    });
    $1.replace(/<div class="gamelist-team-a">((?:(?!<\/div>).)+)/g, (_, str) => {
        [, homeLogo] = /<img src="([^"]+)"/.exec(str);
        [, homeName] = /<a>([^<]+)<\/a>/.exec(str);
        !homeLogo.includes('http') ? homeLogo = 'https:' + homeLogo : null;
    });
    $1.replace(/<div class="gamelist-team-b">((?:(?!<\/div>).)+)/g, (_, str) => {
        [, guestLogo] = /<img src="([^"]+)"/.exec(str);
        [, guestName] = /<a>([^<]+)<\/a>/.exec(str);
        !guestLogo.includes('http') ? guestLogo = 'https:' + guestLogo : null;
    });
    $1.replace(/<span class="gamelist-score">((?:(?!<\/span>).)+)/g, (_, str) => {
        let arr = [];
        str.replace(/<a>(\d+)<\/a>/g, (_, value) => arr.push(value));
        [homeScore, guestScore] = arr;
    });
    [, type] = /<p class="p1">([^<]+)<\/p>/.exec($1);
    [, schedule] = /<p class="p2">([^<]+)<\/p>/.exec($1);
    [, href] = /<a class="gamelist-over" href="([^"]+)"/.exec($1) || [];
    if (!href) href = '';
    href && !href.includes('http') ? href = 'https:' + href : null;

    // 存储数据
    data.push({
        state,
        matchTime,
        type,
        schedule,
        homeLogo,
        homeName,
        homeScore,
        guestLogo,
        guestName,
        guestScore,
        href
    });
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));