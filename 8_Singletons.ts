// singleton 패턴 만들기

class ClassName {
  private static instance: ClassName| null = null; 
  public static getInstance(): ClassName{
    // ClassName으로부터 만든 object가 있으면 그걸 리턴

    // 없으면 만들어서 리턴 
    if(ClassName.instance === null) {
      ClassName.instance = new ClassName(); 
    }
    return ClassName.instance;
  }

  private constructor(){} // private constructor로 설정함으로써 다른 곳에서 생성하는 행위자체를 막을 수 있다. 
}

// private constructor로 만들어서 new를 할 수 없다. 
// const a8 = new ClassName();
// const b8 = new ClassName(); 

const a8 = ClassName.getInstance();
const b8 = ClassName.getInstance(); 

console.log(a8 === b8); // 같다. true