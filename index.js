const blogList = document.getElementById("blog-list")
const form = document.getElementById("new-post")
let postsArray = []

const renderPosts = (title, body) => {
    let html = `
                <h3>${title}</h3>
                <p>${body}</p>
                <hr />
                ${blogList.innerHTML}
            `
    return html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        let html = ""

        for (let posts of postsArray) {
            html += renderPosts(posts.title, posts.body)
        }
        blogList.innerHTML = html
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault()
    
        const postTitle = document.getElementById("post-title").value
        const postBody = document.getElementById("post-body").value
        const data = {
            title: postTitle,
            body: postBody
        }

        fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(post => {

            blogList.innerHTML = renderPosts(post.title, post.body)
            })
    })