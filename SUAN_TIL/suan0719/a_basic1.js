class Cat {
    constructor(name){ //생성자 함수
        this.name = name; //this는 class의미
    }

    showName(){ //이 함수 불러다가 재사용하면됨! (Cat에 적용한 함수)
        console.log(this.name);
    }
};


let cat = new Cat('perl');
cat.showName(); //클래스에다 함수를 불러 쓸 때는 이렇게 적음!
console.log(cat);