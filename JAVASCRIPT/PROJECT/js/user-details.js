// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let user = JSON.parse(localStorage.getItem('user'));

let details = document.createElement('div');
details.setAttribute('class', 'details');

// console.log([userKey]);
for (const userKey in user) {
    let div = document.createElement('div');
    div.setAttribute('class', 'userKey');
    if (typeof user[userKey] !== 'object') {
        div.innerText = `${userKey} : ${user[userKey]}`;
    } else {
        div.innerText = `${userKey}`;
        // console.log(user[userKey]);
        for (const item in user[userKey]) {
            let itemEl = document.createElement('div');
            itemEl.setAttribute('class', 'userKey');
            // console.log(user[userKey][item]);
            if (typeof user[userKey][item] !== 'object') {
                // console.log(item);
                itemEl.innerText = `${item} : ${user[userKey][item]}`
            } else {
                itemEl.innerText = `${item}`;
                // console.log(user[userKey][item]);
                // console.log([itemKey]);
                for (const itemKey in user[userKey][item]) {
                    let itemKey1 = document.createElement('div');
                    itemKey1.setAttribute('class', 'userKey');
                    // console.log(user[userKey][item][itemKey]);
                    itemKey1.innerText = `${itemKey} : ${user[userKey][item][itemKey]}`;
                    itemEl.appendChild(itemKey1);
                }
            }
            div.appendChild(itemEl);
        }
    }
    details.appendChild(div);
}


// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

    let button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.innerText = 'Post of current user';
    let buttonEl = document.createElement('div');
    buttonEl.setAttribute('class', 'divButton');
    buttonEl.appendChild(button);
    document.body.appendChild(buttonEl);
    button.onclick = function (ev) {


    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let postsEl = document.createElement('div');
            postsEl.setAttribute('class', 'postsEl');
            for (const post of posts) {
                let title = document.createElement('div');
                title.setAttribute('class', 'divTitle');
                title.innerText = post.title;


                // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

                let postButton = document.createElement('button');
                postButton.setAttribute('class', 'postButton');
                postButton.innerText = 'show more';

                postButton.onclick = function (ev) {
                    let postClick = JSON.stringify(post);
                    localStorage.setItem('post', postClick);
                    location.href = './post-details.html';

                }

                title.appendChild(postButton);
                postsEl.appendChild(title);
            }

            buttonEl.append(postsEl);
        })
}
let full = document.createElement('div');
full.setAttribute('class', 'full');
full.append(details, buttonEl);
document.body.appendChild(full);