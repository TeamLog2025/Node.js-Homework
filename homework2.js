import path from 'path'

const FILE_PATH = 'os.js';

console.log(`파일 이름 : ${path.basename(FILE_PATH)}`);
console.log(`확장자 : ${path.extname(FILE_PATH)}`);
console.log(`디렉토리 이름 : ${path.dirname(FILE_PATH)}`);