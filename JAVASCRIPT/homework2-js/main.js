// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let weather = [ 'sunny', 'windy', 'foggy', 'rainy', 'fabulous', 'awful', true, false, 17, -11 ]

    console.log(weather[0]);
    console.log(weather[1]);
    console.log(weather[2]);
    console.log(weather[3]);
    console.log(weather[4]);
    console.log(weather[5]);
    console.log(weather[6]);
    console.log(weather[7]);
    console.log(weather[8]);
    console.log(weather[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    let book1 = {
        title: 'HarryPotter',
        pageCount: 860,
        genre: 'fantasy'
    }

    console.log(book1);

    let book2 = {
        title: 'Beauty&Beast',
        pageCount: 600,
        genre: 'fairytale'
    }
    console.log(book2);

    let book3 ={
        title: 'Love&Lose',
        pageCount: 340,
        genre: 'tragedy'
    }

    console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books = [
        {title: 'HarryPotter', pageCount: 860, genre: 'fantasy'},
        {title: 'Beauty&Beast', pageCount: 600, genre: 'fairytale'},
        {title: 'Love&Lose', pageCount: 340, genre: 'tragedy'},
        {authors:[{name:'J. K. Rowling', age: 48}, {name: 'Gabrielle-Suzanne Barbot de Villeneuve', age: 50}, {name: 'Stephanie E. Kusiak', age: 28}]}
    ]

    console.log(books);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

    let users = [
        {name: 'Yurii', username: 'Yurii009', password: 'rtyui78'},
        {name: 'Nazar', username: 'Nazar987', password: 'dftgyu5678'},
        {name: 'Oleg', username: 'Oleg567', password: 'ghj68'},
        {name: 'Sasha', username: 'Sasha56987', password: 'rtfy5678'},
        {name: 'Bogdan', username: 'Bogdan678', password: 'fghj6778'},
        {name: 'Andrii', username: 'Andrii678', password: 'bkiuyg5657'},
        {name: 'Stas', username: 'Stas8760', password: 'jutftf6787'},
        {name: 'Olga', username: 'Olga674e8', password: 'hbysd86t'},
        {name: 'Anna', username: 'Andriivna769', password: 'dlsjgc6t'},
        {name: 'Julia', username: 'Julia7t59', password: 'dcgsgc76'}
    ]

    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);
