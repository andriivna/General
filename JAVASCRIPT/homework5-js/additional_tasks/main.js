// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(a, b, c) {
//
//     if (b > a && c > a) {
//         console.log(a);
//         return a;
//     } else if (a > b && c > b) {
//         console.log(b);
//         return b;
//     } else if (a > c && b > c) {
//         console.log(c);
//         return c;
//     }
//
// }
//
// numbers(19, 15, 22);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numbers(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     }else if (b > a && b > c) {
//         console.log(b);
//         return b;
//     }else if (c > a && c > b) {
//         console.log(c);
//         return c;
//     }
// }
//
// numbers(15, 22, 13);


// - створити функцію яка повертає найбільше число з масиву


// const arr = [2, 4, 6, 7, 9, 11, 15, 3]
//
// function findMax(array) {
//     let max = array[0]
//     for (let item of array) {
//         if (max < item) {
//             max = item
//         }
//     }
//     return max
// }
//
//
// console.log(findMax(arr));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function averageNum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum / array.length;
// }
//
// console.log(averageNum([5, 8, 10]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// const arr1 = [];
// for (let i = 0; i < 100; i++) {
//     arr1[i] = Math.round(Math.random() * 100);
// }
//
// console.log(arr1);



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const arr1 = [];
// for (let i = 0; i < 50; i++) {
//     arr1[i] = Math.round(Math.random() * 50);
// }
//
// console.log(arr1);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let numbers = [1, 2, 3];
//
// let res = numbers.reverse();
// console.log(res);


//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// let a;
// let b;
//
//
// function sum(a,b) {
//     if (a && !b ) {
//         console.log(a);
//     } else if (b && !a) {
//         console.log(b);
//     }else
//         console.log(`${a + b}`);
//     }
//
// sum(6, 5);
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// let result = [];
//
// function res() {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let i = 0; i < arr2.length; i++) {
//             result[i] = arr1[i] + arr2[i];
//         }
//     }
//
//     console.log(result);
//
//
// }
//
// res();
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//      [{name: 'Dima', age: 13}, {model: 'Camry'}] ===> [ name, age, model ]

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum = (a, b, c) => {
//     if(a < b && a < c){
//     console.log(a);
// } else if (b < a && b < c) {
//         console.log(b);
// } else if (c < a && c < b) {
//         console.log(c);
//     }
//
// }
//
// minNum(1, 3, 2);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b, c) => {
//     if(a > b && a > c){
//     console.log(a);
// } else if (b > a && b > c) {
//         console.log(b);
// } else if (c > a && c > b) {
//         console.log(c);
//     }
//
// }
//
// maxNum(1, 3, 2);

// - створити функцію яка повертає найбільше число з масиву
//
// let num = (array) => {
//     let maxNum = array[0];
//     for (const maxNumElement of array) {
//         if (maxNumElement > maxNum)
//             maxNum = maxNumElement;
//
//     }
//     return maxNum;
// }
// let numbers = num ([3, 1, 4, 5, 8, 11, 7]);
// console.log(numbers);




// - створити функцію яка повертає найменьше число з масиву

//  let num = (array) => {
//     let minNum = array[0];
//     for (const minNumElement of array) {
//         if (minNumElement < minNum)
//             minNum = minNumElement;
//
//     }
//     return minNum;
// }
//
// let numbers = num ([3, 1, 4, 5, 8, 11, 7]);
// console.log(numbers);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.

// function figure(b) {
//     if (a > b) {
//         console.log(b);
//     } else {
//         console.log(false);
//     }
// }
//
// let a = 5;
//
// figure(3);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями обєкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
