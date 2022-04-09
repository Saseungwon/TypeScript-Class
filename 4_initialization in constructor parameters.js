"use strict";
// 생성자의 파라미터를 받아서 클래스의 프로퍼티로 초기화하는 방법
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p4 = new Person4("mark", 39);
console.log(p4.name); // age는 private라서 p4.name에만 접근이 가능하다. 
