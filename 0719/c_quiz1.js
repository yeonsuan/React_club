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
animals.map((animal)=>{
    if(animal==="고양이")count+=1;
});
console.log(count)
