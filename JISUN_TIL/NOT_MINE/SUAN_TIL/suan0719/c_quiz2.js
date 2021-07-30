//고양이들만 새 배열에 넣기

const animals = ["복슬 강아지", "검정 고양이", "노란햄스터", "강아지", "노랑 고양이","고양이"];

// let cats = [];
// for(let i = 0; i < animals.length; i++){
//     let animal = animals[i];
//     if(animal.indexOf("고양이") !== -1){
//         cats.push(animal);
//     }
// }

const cats = animals.filter((animal)=>{
    return animal.indexOf("고양이") !== -1;
});
console.log(cats);

