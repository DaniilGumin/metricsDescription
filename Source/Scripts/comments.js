const comments = document.getElementById('comments');
const loading = document.getElementById('loading');
document.addEventListener('layoutIsLoad', () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => {
            loading.remove()
            comments.innerHTML = '';
            let index = Math.floor(Math.random() * 94)
            for (const comment of json.slice(index, index + 5)) {
                comments.innerHTML += `
    <div class="comment-card">
        <p class="header-text">${comment.name}</p>
        <p class="contact-text">${comment.email}</p>
        <p class="main-text">
        ${comment.body}
        </p>
    </div>
    `
            }
        }).catch(_ => {
        loading.remove()
        comments.innerHTML = `<div class="comment-card"><p class="error-text">Ой, что-то сломалось (づ ◕‿◕ )づ</p></div>`
    })
})
