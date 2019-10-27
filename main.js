const endpoint = `https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2`

fetch(endpoint)
.then(response => response.json())
.then( res => res.data.forEach(e => console.log(e)))