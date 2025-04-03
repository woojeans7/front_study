let msg = 'GLOBAL';
function outer() {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    let msg = 'BLOCK';
    console.log(msg);
  }
}
outer();
console.log(msg);

let name = 1;
name = 3;
console.log(name);
