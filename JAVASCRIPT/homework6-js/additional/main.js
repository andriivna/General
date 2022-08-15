// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// function cutString(str, n) {
//     let res = [];
//     for(let i = 0 ; i < str.length; i += n) {
//         res.push(str.substr(i, n));
//     }
//     return res;
// }
//
// document.writeln(cutString('definitely',2))


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
//
// let sent = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     let res = [];
//     let split = sent.split(' ');
//     for (const string of split) {
//         if (string.length === length) {
//             res.push(string);
//         }
//     }
//
//     return res;
// }
//
// document.writeln(delete_characters('Каждый охотник желает знать', 7));



//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP";
// let string = str.split(' ');
// for (let i = 0; i < string.length; i++) {
//     string[i] = string[i].toUpperCase();
// }
// const res = string.join("-");
//     console.log(res);


//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//


// function correct(n1) {
//     let n2 = n1.split('..');
//     for (let i = 0; i < n2.length; i++) {
//         n2[i] = n2[i][0].toUpperCase()+ n2[i].substring(1,n2[i].length);
//     }
//     let res = n2.join(' ');
//     return res;
// }
//
// let resultStr = correct('harry..potter');
// console.log(resultStr);
//



//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let array = []
// for (let i = 0; i < 10; i++) {
//     array.push(parseInt( Math.random() * 100 ));
// }
//
// console.log(array);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let array = []
// for (let i = 0; i < 10; i++) {
//     array.push(parseInt( Math.random() * 100 ));
// }
//
// console.log(array);
// console.log(array.sort());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// let array = []
// for (let i = 0; i < 10; i++) {
//     array.push(parseInt( Math.random() * 100 ));
// }
// let filtered = array.filter(function (x) {
//     return x % 2 === 0;
// });
// console.log(filtered);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let sent = 'be happy and smile';
// let strings = sent.split(' ');
// for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
//
// }
//
// const res = strings.join(" ");
// console.log(res);


//
//