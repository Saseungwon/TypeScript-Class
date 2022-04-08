## Classes 

##### 1. What are Classes
  - object를 만드는 청사진
  - 클래스 이전에 object를 만드는 기본적인 방법은 function
  - js에도 classsms es6부터 사용 가능
  - oop를 위한 초석
  - ts에서는 클래스도 사용자가 만드는 타입의 하나

##### 2. Class Basic
  - class 키워드를 이용하여 클래스를 만들 수 있다. 
  - class 이름은 보통 대문자를 이용한다. 
  - new 를 이용하여 class를 통해 object를 만들 수 있다. 
  - constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다. 
  - this를 이용해서 만들어진 object를 가리킬 수 있다. 
  - js로 컴파일되면 es6의 경우 function으로 변경된다. 

##### 3. constructor & initialize
  - 생성자 함수가 없으면 디폴트 생성자가 불린다. 
  - 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다. 
  - strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에게 값을 할당해야 한다. 
  - 프로퍼티를 선언하는 곳 또는 생성자에게 값을 할당하지 않는 경우에는 ! 를 붙여서 위험을 표현한다.
  - 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다. 
  - 생성자에는 async를 설정할 수 없다. 


##### 4. Access Modifiers(접근제어자)
  - public, private, protected
  - defualt는 public
  - 클래스 내부의 모든 곳(생성자, 프로퍼티, 메서드)에 설정 가능
  - private으로 설정하면 클래스 외부에서 접근 불가
  - js는 private 지원 안 하기 때문에 오랫동안 프로퍼티나 메서드 이름 앞에 _를 붙여서 표현했다.  