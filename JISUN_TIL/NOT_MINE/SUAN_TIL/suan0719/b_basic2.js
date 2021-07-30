var a = 1; //var a까지 선언, =1이 할당

let b = 1; 
let b = 2; //이미 주어진 값이 있을 때, 한번 더 값을 다시 줄 수 있다. 오류 없음

const c = 1;
const c = 2; //const는 재할당이 안됨. 값을 다시 주지 못한다.

//vard은 함수단위 / let,const는 block 단위 / 중괄호를 한 블럭이라고 함!



//삼항 연산자 (조건? 참일경우 : 거짓일경우)
let info = {name : "mean0", id : 0};
let is_me = info.name === "mean0"? true : false