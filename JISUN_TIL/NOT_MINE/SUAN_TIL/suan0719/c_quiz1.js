//배열에서 고양이가 몇마리인지 세기 (for ver)

// let count=0;
// for (let i = 0; i <animals.length; i++){
//     let animal = animals[i];
//     if(animal === "고양이"){
//     count +=1;
//         }  
//     }

const animals = ["강아지","고양이","햄스터","강아지","고양이","고양이","토끼"];
let count = 0;
animals.map((animal)=>{ //map이 새로운 배열 만들어주는데 반복문처럼 쓸 수도 있다!
    if(animal==="고양이")count+=1;
});
console.log(count)
