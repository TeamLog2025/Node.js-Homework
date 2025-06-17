import fs from 'fs'
import path from 'path'

fs.readdir('.',(err,data) => {
    if(err) throw err;

    console.log('현재 디렉토리 내에 있는 파일들');
    data.forEach(element => {
        console.log(path.basename(element));
    });
});