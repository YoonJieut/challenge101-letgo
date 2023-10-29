const fs = require('fs');

// 1to10, 11to20, ... 의 패턴으로 디렉토리를 생성
for (let i = 1; i <= 100; i += 10) {
    const dirName = `${i}to${i + 9}`;
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);

        // 각 디렉토리 내부에 no1.js, no2.js, ... 파일 생성
        for (let j = i; j < i + 10; j++) {
            fs.writeFileSync(`${dirName}/no${j}.js`, '// your code here');
        }
    }
}

// 101 파일 생성
fs.writeFileSync('no101.js', '// your code for 101');

console.log('app.js실행완료');
