import os from 'os'

//현재 os 운영체제 플랫폼

console.log(`현재 운영체제 : ${os.platform}`);
console.log(`시스템 전체 메모리 : ${(os.totalmem/(1024*1024*1024)).toFixed(2)}GB`);
console.log(`시스템 가용 메모리 : ${(os.freemem/(1024*1024*1024)).toFixed(2)}GB`);
console.log(`현재 컴퓨터의 CPU 코어 갯수 : ${os.cpus().length}개`);