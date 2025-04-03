const p = new Promise(
  setTimeout(() => {
    let num = Math.random();
    if (num >= 0.8) {
      //0~1사이의 난수 발생
      resolve(num);
    } else reject(new error());
  }, 2000)
);
p.then((result) => {
  console.log('처리 결과 : ', result);
}).catch((error) => {
  console.log('오류 : ', error);
});
console.log('## Promise 객체 생성!');
