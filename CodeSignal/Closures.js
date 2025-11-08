//Output should be...
//A: 1
//B: 2

function closuresTest() {
  let cnt = 0;
  return function () {
    return cnt++;
  };
}

const counter = closuresTest();
console.log(counter());
console.log(counter());
