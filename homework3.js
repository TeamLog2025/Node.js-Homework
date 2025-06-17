import crypto from 'crypto'

const pwd = "IthinkJSIsUSEful";

console.log(`비번으로 생성된 HASH는 {${crypto.createHash('sha256').update(pwd).digest('hex')}}입니다!`);