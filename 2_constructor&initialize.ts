class Person2 {
  name: string = "Mark";
  age: number;  

  constructor(age?: number) {
    if(age == undefined){
      this.age = 20;
    }  else{
      this.age = age;
    }
  }
  async init(){

  }
 }

const p2: Person2 = new Person2(39);   
await p2.init();
console.log(p2); 
// p2.age = 39;
console.log(p2.age);
