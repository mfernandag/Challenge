const endpoint = `https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2`

fetch(endpoint)
.then(response => response.json())
.then( res => {
    const imgContainer = document.getElementById('newsContainer')
    
    res.forEach(e => {
        const newsLink = document.createElement('a')
        newsLink.href = e.url
        newsLink.classList.add('imgAnchor')
        const img = document.createElement('img')
        img.src = e.image
        img.classList.add('newsImg')
        const title = document.createElement('a')
        title.innerText = e.title
        title.href = e.title
        title.classList.add('newsTitle')
        newsLink.appendChild(img)
        newsLink.appendChild(title)
        imgContainer.appendChild(newsLink)
    })
})



