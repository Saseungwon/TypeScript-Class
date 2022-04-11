// readonly 프로퍼티를 초기값 외에 다른 것으로 바꾸고 싶지 않을때 사용

class Person6 {
  public readonly name: string = 'Mark'; 
  private readonly country: string = 'Korea'; 

  public constructor(private _name: string, private age: number) {
    this.country = 'Korea';
  }   
  
  hello(){
    this.country = 'japan';   // readonly라서 에러 
  }
}

const p6: Person6 = new Person6("mark", 39);   
console.log(p6.name);    
p6.name = "Seungwon"    // readonly 이기 때문에 밖에서 set하면 에러
console.log(p6.name);    


