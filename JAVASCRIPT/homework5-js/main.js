// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//
// let square = (a, b) => {
//     return a * b;
// }
// console.log(square(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(radius) {
//     return  Math.PI * radius * 2;
// }
// console.log(circle(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(r, h) {
//     return Math.PI * r * h;
// }
// console.log(cylinder(3, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент

// function usersList (array) {
//     for (const user of array) {
//         console.log(user);
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// usersList(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolores.';
//
// function article(text) {
//     document.write(`<p>${text}</p>`);
//
// }
// article(text);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let x = 'good item';
// function items(){
//     document.write('<ul>');
//     for (const item of arguments) {
//         document.write(`<li>${x}</li>
//                         <li>${x}</li>
//                         <li>${x}</li>`);
//     }
//         document.write('</ul>');
// }
//
// items(x);

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
//

// let a = 'Just do it.'
// let b = 3;
//
// function list(a,b) {
//
//     document.write(`<ul>`);
//
//     for (let i = 0; i < b; i++) {
//         document.write(`<li> ${a}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// list(a,b);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



// function list() {
//     let el = [1, 2, 4, 64, 56, 346, 897867, 'trip', 'summer', 'sun', true, false];
//     document`);
//
//         for (let i = 0; i < el.length; i++) {
//             document.write(`<li>${el[i]}</li>`)
//         }
//
//
//     document.write(`</ul>`);
// }
//
// list();


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1,name: 'vasya', age: 31},
//     {id: 2,name: 'petya', age: 30},
//     {id: 3,name: 'kolya', age: 29},
//     {id: 4,name: 'olya', age: 28},
//     {id: 5,name: 'max', age: 30},
//     {id: 6,name: 'anya', age: 31},
//     {id: 7,name: 'oleg', age: 28},
//     {id: 8,name: 'andrey', age: 29},
//     {id: 9,name: 'masha', age: 30},
//     {id: 10,name: 'olya', age: 31},
// ];
//
// function list(users) {
//     document.write(`<ul>`);
//
//     for (let i = 0; i < users.length; i++) {
//         document.write(`<div><li>${users[i].id} - ${users[i].name} - ${users[i].age}</li></div>`)
//     }
//
//
//     document.write(`</ul>`);
//
// }
//
//
// list(users);

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [56, 59, 6378, 738, 53];
// let n = Math.min.apply(null,numbers);
//         console.log(n);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function calc(a, b, c, action) {
//         let res;
//         switch (action) {
//                 case '+':
//                         res = a + b + c;
//                         break;
//                 default:
//                         res = 0;
//         }
//         return res;
// }
//
// console.log(calc(1, 2, 10, '+'));