/* 1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
   С помощью цикла for найдите произведение элементов этого массива.
   Общий результат сохранить в объекте с соответствующим свойством.
   Например: 2 * 3 = 6 -> 6 * 4 и.т.д. */

   /* через цикл */
   const numbers = [2,3,4,5,6,7];
   let sum = 1;
   for(i=0; i<numbers.length; i++){
       sum *= numbers[i]
   }
   console.log(sum);   


   /* через reduce */
   const arr = [2,3,4,5,6,7];
   let result = arr.reduce((sumElem,currentValue)=>{
       return sumElem * currentValue;
   },1);
   console.log(result);


   /* 2) Напишите функцию, которая заполняет новый массив предоставленным значением 
   и затем ее возвращает. Функция должна первым параметром принимать 
   элемент (значение для массива), вторым параметром размер массива.  
   Например: myFunc('a', 3)   // ['a', 'a', 'a'] */


    function myFunc(elem, value) {
    let newArr = [];
    for(elem; elem > 0; elem--) {
    newArr.push(value);
    }
    return newArr;
}
    console.log(myFunc(3, 'a'));





/*    3) Напишите функцию, которая разворачивает массив в обратном порядке 
   и затем ее возвращает.  Функция наша  принимает массив любых элементов. */
   
   
   function showArray (){
    const array = ['a','b','c'];
    array.reverse();
    console.log(array);
   };
   showArray();
