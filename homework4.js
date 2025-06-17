import fs from 'fs'

fs.writeFile('input.txt','I think teamlog is great',(err) => {
    if(err) throw err;

    fs.readFile('input.txt','utf-8',(err,data) => {
        if(err) throw err;
        console.log(`파일 내용은 ${data}입니다!`);
    })
})