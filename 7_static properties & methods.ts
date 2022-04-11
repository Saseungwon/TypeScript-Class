class Person7 {
  private static CITY = "seoul"; 
  public  hello(){
    console.log("안녕하세요", Person7.CITY);
  }
  public change(){
    Person7.CITY = "LA";
  }
}

const p7 = new Person7();
p7.hello(); 

const p77 = new Person7();
p77.hello(); // 안녕하세요 seoul
p7.change(); // 안녕하세요 seoul
p77.hello(); // 안녕하세요 LA

