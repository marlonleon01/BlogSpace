const blogList = document.getElementById("blog-list")

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