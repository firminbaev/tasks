/* 1) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено 
  значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры 
  (не считая значения 99) и вывести эту информацию на экран.
  
  ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4 */

     let btnStart = document.getElementById('start');
    let resultBtn = document.getElementById('result');

    let result;
    let prm;
    result=0;

    let function1  = () => {
        prm =prompt('Введите число');
        while (prm !=99) {
            result += 1;
            prm = prompt('Введите число');
        } return result
    }
    btnStart.onclick = function1;

    resultBtn.onclick = () => {
        alert (`кол-во чисел- ${result}`);
} 
 

/* 2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено 
   значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры, 
   чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию 
   на экран.

   ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290 */
  
    var k;
   var s;
   var a;
   k = 0;
   s = 0;
   a = parseFloat(window.prompt('Введите число'));
   while (a != 999) {
   k = k + 1;
   s = s + a;
   a = parseFloat(window.prompt('Введите число'));
   }
   window.alert(String('кол-во чисел - ') + String(k));
   window.alert(String('сумма = ') + String(s)); 


  /*  3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
   а второе – нынешний (текущий) год. 
   Программа должна вывести на экран возраст ученика (в целых годах).

   ввод: 2006, 2018 ⇒ вывод: вам 12 лет */


    var x;
    var y;
    x = parseFloat(window.prompt('Введите свой год рождения'));
    y = parseFloat(window.prompt('Введите текущий год'));
    window.alert(['Вам ',y - x,' лет'].join(''));
  