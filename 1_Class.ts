class Person {
  name;

  constructor(name: string){    // 생성자 - constructor -> 이걸 해야 ("Mark") 같이 넣을 수 있다. 
    this.name = name;   // name을 프로퍼티로 쓰기 위해서는 위에 name을 선언해줘야한다. 
  }
}
const p1 = new Person("Mark");  // object가 p1에 할당  
console.log(p1); 
