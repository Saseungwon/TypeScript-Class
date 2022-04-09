"use strict";
// 접근제어자
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// public으로 외부에서 사용할 수 있게 해준다.
// private이면 내부에서만 사용가능
// protected 외부에서는 접근 불가능, 상속관계면 접근 가능 -> 상속 파트에서 공부
class Person3 {
    constructor(age) {
        this.name = "Mark";
        if (age == undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
const p3 = new Person3(39); // 생성자를 private로 설정하면 오류, 
console.log(p3.age);
