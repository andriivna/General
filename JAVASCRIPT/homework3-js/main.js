// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('Type a number');
//
//
// if ( x > 0 ){
//     console.log('Вірно');
// }else {
//     console.log('Невірно');
// }
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('Enter time:');
// if (time >= 0 && time <= 15) {
//     console.log('first part')
// }else if (time > 15 && time <= 30) {
//     console.log('second part');
// }else if (time > 30 && time <= 45) {
//     console.log('third part');
// }else if (time > 45 && time <= 59) {
//     console.log('fourth part');
// } else {
//     console.log(false)
// }
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Enter number day:');
//
// if (day >= 1 && day <= 10) {
//     console.log('first decade');
// }else if (day > 10 && day < 21) {
//     console.log('second decade');
// }else if (day >= 21 && day <= 31) {
//     console.log('third decade');
// }else {
//     console.log(false);
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let schedule = +prompt('enter day:');
//
// switch (schedule) {
//     case '1':
//         document.write('Sunday');
//         break;
//     case '2':
//         document.write('Monday');
//         break;
//     case '3':
//         document.write('Tuesday');
//         break;
//     case '4':
//         document.write('Wednesday');
//         break;
//     case '5':
//         document.write('Thursday');
//         break;
//     case '6':
//         document.write('Friday');
//         break;
//     case '7':
//         document.write('Saturday');
//         break;
//     default:
//         document.write('There is no schedule for this day.')
//
// }
//
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
//  let v1 = +prompt('Enter first number');
// let v2 = +prompt('Enter second number ');
//
// console.log(Math.max(v1, v2));
// if (v1 === v2) {
//     console.log('equal');
// }
//
//
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
// let x = +prompt('Enter your age: ');
// if (!x){
//     x = 'unknown';
//     console.log(x);
// }else{
//     console.log(x);
// }
//
//
