// 접근제어자

// public으로 외부에서 사용할 수 있게 해준다.
// private이면 내부에서만 사용가능
// protected 외부에서는 접근 불가능, 상속관계면 접근 가능 -> 상속 파트에서 공부
class Person3 {
  public name: string = "Mark";
  public age!: number;  

  public constructor(age?: number) {
    if(age == undefined){
      this.age = 20;
    }  else{
      this.age = age;
    }
  }

  public async init(){}
 }

const p3: Person3 = new Person3(39);   // 생성자를 private로 설정하면 오류, 
console.log(p3.age);
