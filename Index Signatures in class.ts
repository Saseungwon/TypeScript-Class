// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

class Students{
  // mark: string = 'male'; => 이렇게 표현하는 것 보다 밑에 index 처럼 써야 훨씬 효율적이다. 무슨 이름을 줘도 되니까 
  [index: string]: "male" | "female"; 

  mark: "male" = "male"; // => 고정으로 값을 주고싶을 때 
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';
console.log(a); 

const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

