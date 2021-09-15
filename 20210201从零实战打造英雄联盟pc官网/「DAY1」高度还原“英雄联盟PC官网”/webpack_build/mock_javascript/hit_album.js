let str = `...`;

let index = -1,
    data = [];
str = str.replace(/\n/g, '');
str.replace(/<li (?:[^>]+)>((?:(?!<\/li>).)+)/g, (_, $1) => {
    index++;
    let reg1 = /<h4 class="name-program">([^<]+)<\/h4>/,
        reg2 = /<img class="program-pic" src="([^"]+)" width="\d+" height="\d+" alt="sTitle">/,
        reg3 = /<p class="progress-program">([^<]+)<\/p>/,
        reg4 = /<a target="_blank" class="author-program" href="(?:[^"]+)" title="([^"]+)"/,
        reg5 = /PTTSendClick\('(?:[^']+)','(?:[^']+)','([^']+)'\)/g,
        reg6 = /docid=(\d+)/,
        reg7 = /<img src="([^"]+)" width="\d+" height="\d+" alt="(?:[^"]+)">/;
    [, title] = reg1.exec($1),
        [, pic] = reg2.exec($1),
        [, updateTime] = reg3.exec($1),
        [, author] = reg4.exec($1),
        [, description] = reg5.test($1) ? reg5.exec($1) : '',
        [, id] = reg6.exec($1),
        [, authorPic] = reg7.exec($1) || [];
    if (!pic.includes('http')) pic = 'https:' + pic;
    author = author && author.trim();
    authorPic = authorPic || '';
    if (authorPic && !authorPic.includes('http')) authorPic = 'https:' + authorPic;

    if (data.find(item => item.id === id)) return;

    let item = {
        id,
        pic,
        title,
        description,
        updateTime,
        authorPic,
        author
    };
    data.push(item);
});

let fs = require('fs');
fs.writeFileSync('./1.json', JSON.stringify(data));