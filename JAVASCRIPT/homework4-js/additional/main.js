// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let items = [1, 2, 3, 4, 5];
// console.log(items);
//
// let items1 = ['one', 'two', 'three', 'four', 'five'];
// console.log(items1);
//
// let items3 = [4, 'four', true, 6, false];
// console.log(items3);
// //

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
// let products = [];
// console.log(products[0] = 1, products[1] = 'one', products[2] = false);
// //
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while

// / let i = 0;
// // while (i < numbers.length) {
// //     console.log(numbers[i]);
// //     i++;
// // }

//     2. перебрати його циклом for
//
// for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// }



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом


// for (let i = 2; i <numbers.length; i++) {
//     if (i % 2 == 0) {
//         console.log( numbers[i] );
//     }
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (i % 2 >= 1) {
//         console.log(number);
//     }
// }



// 5. перебрати циклом while та вивести  числа тільки парні  значення


// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення


// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (numbers[i] % 2 === 0) {
//         console.log(number);
//     }
// }



// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number % 3 === 0) {
//         console.log('okten');
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     console.log(number);
// }



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор




