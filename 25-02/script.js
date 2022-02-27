/* classroom task */

let question = prompt('Кто пришел?');
if(question == 'Админ'){
    let password = prompt('Пароль?');
    if(password == 'привет'){
        alert('Добро пожоловать!');
    }
    else if(password == null){
        alert('Вход отменен')
    }
    
     else {
        alert('Пароль неверен');
    } 
}

else if(question == null){
    alert('Вход отменен')
}

 else {
    alert('Я вас не знаю');
} 



/* 1) Создайте массив с числами. Перебирая элементы созданного массива с помощью 
   цикла выведите только те элементы массива, которые больше нуля и меньше 10. */

   let numbers = [1,2,3,9,22,33,55,5,6];
   for(let i = 0; i < numbers.length; i++){
       if(numbers[i] > 10){
           continue;
       }
       console.log(numbers[i]);
   }


   /* 2) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
   С помощью цикла надо найти сумму элементов этого массива.
 */

   let arr = [1,2,5,66,88,5];
   let result = 0;
   for(let e = 0; e < arr.length; e++){
       result += arr[e];
   }
   console.log(result);



  /*  3) Создайте массив с различными числами. Должно быть как минимум 10 элементов 
   внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива. 
   Квадрат числа 5 будет 25. */

   let sum = [5,10,15,20,25,30,35,40,45,50];
   let newSum = [];

   for(let u = 0; u < sum.length; u++) {
       let sqr = sum[u] * sum[u];
       newSum.push(sqr);
   }

   alert(newSum);



