// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const post = JSON.parse(localStorage.getItem('post'));
// console.log(post);

const full = document.createElement('div')
full.setAttribute('class', 'full');


const postEl = document.createElement('div');
postEl.setAttribute('class', 'postEl');



for (const postKey in post) {
    const div = document.createElement('div');
    div.setAttribute('class', 'postKey');
    //console.log([postKey]);
    // console.log(post[postKey]);
    if (typeof post[postKey] !== 'object') {
        div.innerText = `${postKey} : ${post[postKey]}`;
    } else {
        div.innerText = `${postKey}`;

        for (const item in post[postKey]) {
            const itemEl = document.createElement('div');
            itemEl.setAttribute('class', 'postKey');
            if (typeof post[postKey][item] !== 'object') {
                itemEl.innerText = `${item} : ${post[postKey][item]}`
            } else {
                itemEl.innerText = `${item}`;
                for (const itemKey in post[postKey][item]) {
                    const itemKeyEl = document.createElement('div');
                    itemKeyEl.setAttribute('class', 'postKey');
                    itemKeyEl.innerText = `${itemKey} : ${post[postKey][item][itemKey]}`;
                    itemEl.appendChild(itemKeyEl);
                }
            }
            div.appendChild(itemEl);
        }
    }
    postEl.appendChild(div);
}

full.appendChild(postEl);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        const commentsEl = document.createElement('div');
        commentsEl.setAttribute('class', 'comments');
        for (const comment of comments) {
            const commentEl = document.createElement('div');
            commentEl.setAttribute('class', 'comment');


            const postIdEl = document.createElement('div');
            postIdEl.innerText = `PostId : ${comment.postId}`
            commentEl.appendChild(postIdEl);

            const idEl = document.createElement('div');
            idEl.innerText = `Id : ${comment.id}`;
            commentEl.appendChild(idEl)

            const nameEl = document.createElement('div');
            nameEl.innerText = `Comment name : ${comment.name}`;
            commentEl.appendChild(nameEl);

            const emailEl = document.createElement('div');
            emailEl.innerText = `Email : ${comment.email}`;
            commentEl.appendChild(emailEl);

            const bodyEl = document.createElement('div');
            bodyEl.innerText = comment.body;
            commentEl.appendChild(bodyEl);


            commentsEl.appendChild(commentEl);
        }
        full.appendChild(commentsEl);
    });
document.body.append(full);