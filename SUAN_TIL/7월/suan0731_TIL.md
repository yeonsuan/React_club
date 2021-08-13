# 210731 회고이자 복습

## from
- 배열로 만들고 싶을 때, 유사 배열 복습해서 새거 만들 때,
여기서 유사 배열 모양은 [어떤 값들...]처럼 생겼음.
배열의 내장 함수를 사용 못하는 것

- 새로운 배열 만드는 것이라 생각하기. (초기화할 때)

const new_array = Array.from({length:4})까지만 하면
  [undefined,undefined,undefined,undefined]
  const new_array = Array.from({length:4) , (item, idx)
  =>{return idx;}); 
  [0,1,2,3]