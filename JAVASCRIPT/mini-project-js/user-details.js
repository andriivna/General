// document.write(localStorage.getItem('users'));

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

// for (const user in users) {
//     let id = document.createElement('h1');
//     h1.innerText = ` User's ID :${user.id}`;
//     document.body.appendChild(id);

// }
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    let div = document.createElement('div');
    div.innerText = `${localStorage.getItem('users')}`;
    let btn1 = document.createElement('button');
    btn1.innerText = 'post of current user';
    btn1.onclick = function (){
        let user = localStorage.getItem('users');
        fetch('https://jsonplaceholder.typicode.com/users/${user.id}/posts')
       .then(response => {
               return response.json();
             })
       .then(posts => posts.forEach(post =>{
          let click = JSON.stringify(post);
           localStorage.setItem('posts', click);

           document.write(`${localStorage.getItem(posts.title)}`);
            }))


    }
    document.user.append(div, btn1);

// }));

//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.