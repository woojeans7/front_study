// 매개변수에 기본값을 설정한 경우
function hello(name = '홍길동') {
  //   if (!name) {
  //     return '이름을 입력해주세요.';
  //   } else {
  //     return name + '님, 안녕하세요?';
  //   }
  return name + '님, 안녕하세요?';
}

let name = hello();
// name = '라이언';
console.log(name);
