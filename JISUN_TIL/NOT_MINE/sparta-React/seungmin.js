'use strict';

// (1) 배열에서 고양이가 몇 마리인지 세기 - map으로 해보자!

// const animals = ["강아지", "고양이", "햄스터", "강아지", "고양이", "고양이", "토끼"];
// let count = 0;
// animals.map((animal) => {
// 	if (animal === "고양이") {
// 		count += 1;
// 	}
// });
// console.log(count);

// (2) 배열에서 filter로 해보자!

// const animals = ["복슬 강아지", "검정 고양이", "노란 햄스터", "강아지", "노랑 고양이", "고양이", "흰 토끼"];
// let cats = [];
// for (let i = 0; i < animals.length; i++) {
// 	let animal = animals[i];
// 	// indexOf는 파라미터로 넘겨준 텍스트가 몇 번째 위치에 있는 지 알려주는 친구입니다.
// 	// 파라미터로 넘겨준 텍스트가 없으면 -1을 반환해요!
// 	// 즉 아래 구문은 고양이라는 단어를 포함하고 있니? 라고 묻는 구문이죠!
// 	if (animal.indexOf("고양이") !== -1) {
// 		cats.push(animal);
// 	}
// }
// console.log(cats);


// const animals = ["복슬 강아지", "검정 고양이", "노란 햄스터", "강아지", "노랑 고양이", "고양이", "흰 토끼"];

// let cats = animals.filter((animal) => {
// 		return animal.indexOf("고양이") !== -1;
// });
// console.log(cats);

// const animals = ["복슬 강아지", "검정 고양이", "노란 햄스터", "강아지", "노랑 고양이", "고양이", "흰 토끼"];

// let cats = animals.filter((animal) => {
// 		return animal.indexOf("고양이") !== -1;
// });
// console.log(cats);
