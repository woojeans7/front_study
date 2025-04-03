const order = (coffee, callback) => {
  console.log(`${coffee} 주문 접수`);
  // 3초 후에 출력
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

// 출력되는 함수 -> callback으로 들어감.
const display = (result) => {
  console.log(`${result} 완료!`);
};

//함수 호출
order('아메리카노', display);
