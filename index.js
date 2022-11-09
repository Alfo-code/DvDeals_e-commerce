
let dvd = "";
data.forEach((movies) =>{
    dvd += 
    `<div class="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="" alt="" class="poster">
        <p>${movies.genre}</p>
        <p>Years: ${movies.year}</p>
        <p>${movies.price}</p>
        <p>Stock: ${movies.stock}</p>
        <button class="btn" type="submit">BUY NOW</button>
    </div>`
})
document.getElementById('movie-grid').innerHTML = dvd;