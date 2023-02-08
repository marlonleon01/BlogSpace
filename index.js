const blogList = document.getElementById("blog-list")
const form = document.getElementById("new-post")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""

        for (let posts of postsArr) {
            html += `
                        <h3>${posts.title}</h3>
                        <p>${posts.body}</p>
                        <hr />    
                    `
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
            .then(data => console.log(data))
    })