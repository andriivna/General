// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let full = document.createElement('div');
        full.setAttribute('class', 'full');
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.setAttribute('class', 'divUser');

            // const {id, name} = user;
            let userName = document.createElement('div');
            userName.setAttribute('class', 'userName');
            userName.innerText = `${user.id} -- ${user.name}`;
            divUser.appendChild(userName);


            let button = document.createElement('button');
            button.setAttribute('class', 'button');
            button.innerText = 'show more';
            divUser.appendChild(button);

            // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            button.onclick = function (ev) {
                let userClick = JSON.stringify(user);
                localStorage.setItem('user', userClick);
                location.href = './user-details.html';

            }
            full.appendChild(divUser);


        }
        document.body.appendChild(full);
    });