"use strict";
class Person5 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    // Get을 하는 함수 getter
    get name() {
        return this._name = "Sa"; // get은 return 필요
    }
    // Set을 하는 함수 setter
    set name(n) {
        this._name = n; // 그리고 받은 n을 _name에 넣는다. 
    }
}
const p5 = new Person5("mark", 39);
console.log(p5.name); // get -> 값을 꺼내오는 것
p5.name = "Seungwon"; // set -> 원래 있던 것들 다른 값으로 설정해주는 것
console.log(p5.name); // get, set으로 SeungwonSa 으로 업데이트
