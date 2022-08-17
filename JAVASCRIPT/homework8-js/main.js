// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [(new User(1, 'user1', 'useer1', 'user1@gmail.com', 111111)),
//     (new User(2, 'user2', 'useer2', 'user2@gmail.com', 222222)),
//     (new User(3,'user3','user_3','user3@gmail.com', 333)),
//     (new User(4,'user4','user_4','user4@gmail.com', 444)),
//     (new User(5,'user5','user_5','user5@gmail.com', 555)),
//     (new User(6,'user6','user_6','user6@gmail.com', 666)),
//     (new User(7,'user7','user_7','user7@gmail.com', 777)),
//     (new User(8,'user8','user_8','user8@gmail.com', 888)),
//     (new User(9,'user9','user_9','user9@gmail.com', 999)),
//     (new User(10,'user10','user_10','user10@gmail.com', 1010))]
//
//
// console.log(users);




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
//
// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     (new User(1, 'user1', 'useer1', 'user1@gmail.com', 111111)),
//     (new User(2, 'user2', 'useer2', 'user2@gmail.com', 222222)),
//     (new User(3,'user3','user_3','user3@gmail.com', 333)),
//     (new User(4,'user4','user_4','user4@gmail.com', 444)),
//     (new User(5,'user5','user_5','user5@gmail.com', 555)),
//     (new User(6,'user6','user_6','user6@gmail.com', 666)),
//     (new User(7,'user7','user_7','user7@gmail.com', 777)),
//     (new User(8,'user8','user_8','user8@gmail.com', 888)),
//     (new User(9,'user9','user_9','user9@gmail.com', 999)),
//     (new User(10,'user10','user_10','user10@gmail.com', 1010))]
//
// let filtered = users.filter(function (value) {
//
//     return value.id % 2 === 0;
//
// });
//
// console.log(filtered);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// function User(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     (new User(12, 'user1', 'useer1', 'user1@gmail.com', 111111)),
//     (new User(253, 'user2', 'useer2', 'user2@gmail.com', 222222)),
//     (new User(346,'user3','user_3','user3@gmail.com', 333)),
//     (new User(42,'user4','user_4','user4@gmail.com', 444)),
//     (new User(574,'user5','user_5','user5@gmail.com', 555)),
//     (new User(623,'user6','user_6','user6@gmail.com', 666)),
//     (new User(73,'user7','user_7','user7@gmail.com', 777)),
//     (new User(82,'user8','user_8','user8@gmail.com', 888)),
//     (new User(97,'user9','user_9','user9@gmail.com', 999)),
//     (new User(1065,'user10','user_10','user10@gmail.com', 1010))]
//
//
// users.sort(function (a, b) {
//     return a.id - b.id;
// });
// console.log(users);



//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.order = order;
//     }
// }
//
// let clients = [
//     (new Client(56, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(565, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(5496, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(567, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(9756, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(504566, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(4567, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(987, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(234, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
//     (new Client(34567, 'client1', 'clieeent1', 'client1gmail.com', 5678987, 'smartphone')),
// ];
//
// console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// //
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.order = order;
//     }
// }
//
// let clients = [
//     (new Client(56, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car'])),
//     (new Client(565, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car','smartphone', 'car'])),
//     (new Client(5496, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat', 'smartphone'])),
//     (new Client(567, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car','smartphone', 'car','smartphone', 'car'])),
//     (new Client(9756, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car','smartphone'])),
//     (new Client(504566, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car','smartphone', 'car','smartphone'])),
//     (new Client(4567, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car','smartphone', 'car','smartphone', 'car','smartphone', 'car'])),
//     (new Client(987, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car'])),
//     (new Client(234, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car','smartphone', 'car','smartphone', 'car','smartphone', 'car'])),
//     (new Client(34567, 'client1', 'clieeent1', 'client1gmail.com', 5678987, ['smartphone', 'car', 'flat','smartphone', 'car']))
//
// ];
//
//
// clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
//
// });
//
//
//
// console.log(clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpead = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function() {
//         console.log( `їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (const keys in this) {
//             if(typeof this[keys]!== 'function') console.log(`${keys} - ${this[keys]}`);
//         }
//
//     };
//     this.speed = function () {
//         console.log(`${'NewSpeed'} - ${this.maxSpead += newSpeed}`);
//     };
//
//
// }
//
// class Driver extends Car {
//     constructor(name, age, experience) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.experience = experience;
//     }
//
// }
//
// let dr = new Driver('Oleg', 21, 2);
// console.log(dr);
//
//
//
// let newSpeed = 20;
// let car1 = new Car('a6', 'audi', 2005, 220, 17);
//
//
//
// car1.drive();
// car1.info();
// car1.speed();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpead = maxSpeed;
//         this.engine = engine;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         };
//         this.info = function () {
//             for (const keys in this) {
//                 if (typeof this[keys] !== 'function') console.log(`${keys} - ${this[keys]}`);
//             }
//
//         };
//         this.speed = function () {
//             console.log(`${'NewSpeed'} - ${this.maxSpead += newSpeed}`);
//         };
//
//     }
// }
//
// class Driver extends Car {
//     constructor(name, age, experience) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.experience = experience;
//     }
//
// }
//
// let dr = new Driver('Oleg', 21, 2);
// console.log(dr);
//
//
//
// let newSpeed = 20;
// let car1 = new Car('a6', 'audi', 2005, 220, 17);
//
//
//
// car1.drive();
// car1.info();
// car1.speed();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella (name, age, legSize) {
    this.name = name;
    this.age = age;
    this.legSize = legSize;
}

class Prince{
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}



let list =
    [
        (new Cinderella('Cinderella1', 18, 37)),
        (new Cinderella('Cinderella2', 17, 31)),
        (new Cinderella('Cinderella3', 16, 32)),
        (new Cinderella('Cinderella4', 19, 33)),
        (new Cinderella('Cinderella5', 20, 34)),
        (new Cinderella('Cinderella6', 21, 35)),
        (new Cinderella('Cinderella7', 22, 36)),
        (new Cinderella('Cinderella8', 23, 38)),
        (new Cinderella('Cinderella9', 24, 39)),
        (new Cinderella('Cinderella10', 25, 40)),
    ];

let prince = new Prince('Charles', 21, 35);

for (const listElement of list) {
    if (listElement.legSize === prince.shoeSize) {
        console.log(listElement);
    }
}
// let find = list.find(value => value.legSize === prince.shoeSize);
// console.log(find);
