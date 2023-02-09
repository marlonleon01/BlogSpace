const blogList = document.getElementById("blog-list")
const form = document.getElementById("new-post")
let postsArray = []

const renderPosts = () => {
    let html = ""
    
    for (let post of postsArray) {
        html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
    }
    blogList.innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
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
                postsArray.unshift(post)
                renderPosts()
                form.reset()
            })
    })