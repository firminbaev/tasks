/* 1) Напишите функцию hello(), которая при вызове будет возвращать строку 
   «Привет, JavaScript!» */

   function hello() {
       return '«Привет, JavaScript!»'
   }
   hello();
   alert(hello());



   
/*      2) Нужно создать функцию, которая будет выводить куб числа на страничку. 
   Число должно передаваться параметром. */

   function cube(num=5) {
        return num**3;
   }
    cube();
    alert(cube());



 /*   3) Напишите функцию getName(), которая при вызове будет принимать переменную 
   name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»). 
   В случае отсутствующего параметра выводить «Привет, гость» */


   function getName() {
       let name = prompt('Введите имя');
       if(name == 'Андрей'){
           alert('Привет, Андрей');
       }
       else {
            alert ('Привет,гость')}
    
   }
   getName();


 /*   4) На старте вы получаете массив. Необходимо написать функцию, которая будет  
   возвращать массив удвоенных значений исходного массива.
   Пример кода:
   example([1, 2, 3]) => [2, 4, 6]
   example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
   example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4] */

   const massive = [];
   function example(mass) {
       for(let i = 0; i < mass.length; i++){
           let massAll = mass[i] + mass[i];
           mass.push(massAll);
       }
       
   }
    example([1, 2, 3]);
    example([4,1,1,1,4]);
    example([2,2,2,2,2,2]);
    console.log(example);
