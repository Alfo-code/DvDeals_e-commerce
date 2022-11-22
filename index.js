// Cards
let dvd = "";
data.forEach((movies) =>{
    dvd += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
})
document.getElementById('movie-grid').innerHTML = dvd;

// =========================================================

// Sort by date oldestFirst

let oldest = data.slice(0);

oldest.sort(function(a,b) {
    return a.year - b.year;
});

let sorted = "";
oldest.forEach((movies) =>{
    sorted += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
})

// Sort by date newestFirst

let newest = data.slice(0);

newest.sort(function(a,b) {
    return b.year - a.year;
});

let newestSort = "";
newest.forEach((movies) =>{
    newestSort += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
});

// Sort by price Cheap first

let cheapFirst = data.slice(0);

cheapFirst.sort(function(a,b) {
  a = (a.price.replace(/\£|,/g, ""));
  b = (b.price.replace(/\£|,/g, ""));
    return a - b;
});


let cheapFilter = "";
cheapFirst.forEach((movies) =>{
    cheapFilter += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
});


// Sort by price Expensive first

let expFirst = data.slice(0);

expFirst.sort(function(a,b) {
  a = (a.price.replace(/\£|,/g, ""));
  b = (b.price.replace(/\£|,/g, ""));
    return b - a;
});


let expFilter = "";
expFirst.forEach((movies) =>{
    expFilter += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
});


// Sorting function

function sorting(value) {
  if (value === "oldRel") {
    document.getElementById('movie-grid').innerHTML = sorted;
  }
  else if (value === "newRel" ) {
    document.getElementById('movie-grid').innerHTML = newestSort;
  }
  else if (value === "priceDown") {
    document.getElementById('movie-grid').innerHTML = expFilter;
  } 
  else if (value === "priceUp") {
    document.getElementById('movie-grid').innerHTML = cheapFilter;
  } 
  else{value === "all" 
    document.getElementById('movie-grid').innerHTML = dvd;
  }
};

// Search

function searchDvd(){
  const input = document.getElementById('search').value.toUpperCase();
  const cardContainer = document.getElementById('movie-grid');

  const movie = cardContainer.getElementsByClassName('cards');

  for(let i = 0; i < movie.length; i++) {
    let title = movie[i].querySelector('.title');

    if(title.innerText.toUpperCase().indexOf(input) > -1) {
      movie[i].style.display = "";
    } else {
      movie[i].style.display = "none";
    }
  }
};

// Filter by genre

const boxes = document.querySelectorAll('input[type="checkbox"]');
const cardContainer = document.getElementById('movie-grid');
const movie = cardContainer.getElementsByClassName('cards');

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", (e) => {
    const filter = e.target.id;
    console.log(filter)

    for(let i = 0; i < movie.length; i++){
      let genre = movie[i].querySelector('.genre');
    
      if(genre.innerText.toLowerCase().includes(filter)) {
          movie[i].style.display = "";
          } else {
          movie[i].style.display = "none";
        }
     }
  })
};

// Clear button

const btnClear = document.getElementsByTagName("input");
for (let i = 0; i < btnClear.length; ++i) { 
  btnClear[i].checked = false; 
}

// Add to Cart

// const addItem = document.getElementById('btn');

// addItem.addEventListener('click', ()=>{
//   console.log(addItem);
//   document.getElementById('cart-counter').innerText = +1;
// })

// ///

// function addToCart(){
//   const btn = document.getElementById('btn');
//   const cartCounter = document.getElementById('cart-counter');

//   data.forEach((dvd) =>{
//     if(dvd.stock > 0) {
//       console.log(dvd.stock)
//       // const cartCounter = document.getElementById('cart-counter');
//       cartCounter.innerText=  1;
//     } else{
//       cartCounter.innerText = 0;
//     }
//   })
 
// };


// (function(){

//     const cart = document.getElementById('cart');
//     const cartContainer = document.getElementById('cart');
  
//     cart.addEventListener('click', function(){
//       cartContainer.classList.toggle('show-cart')
//     })
//   }
// )();

// Pagination

let page1 = data.slice(0, 12);

let pages = "";
page1.forEach((movies) =>{
    pages += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
});

function firstPage() {
  document.getElementById('movie-grid').innerHTML = pages;
};

let page2 = data.slice(12, 24);

let nextPage = "";
page2.forEach((movies) =>{
    nextPage += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick="addToCart()" class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
});

function secondPage() {
  document.getElementById('movie-grid').innerHTML = nextPage;
};