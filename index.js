// Cards
let dvd = "";
data.forEach((movies) =>{
    dvd += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p>${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p id="prices">${movies.price}</p>
        <p>In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
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
        <p>${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p>${movies.price}</p>
        <p>In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
})



const old = document.getElementById('dropdown');

old.addEventListener('click', ()=>{
  document.getElementById('movie-grid').innerHTML = sorted;
})

// Sort by date newestFirst

let newest = data.slice(0);

newest.sort(function(a,b) {
    return b.year - a.year;
});

let sortedNew = "";
oldest.forEach((movies) =>{
    sortedNew += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p>${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p>${movies.price}</p>
        <p>In Stock: ${movies.stock}</p>
        <button class="btn" type="submit">Add to Basket</button>
    </div>`
})



// const dvdNew = document.getElementById('cards');

// dvdNew.addEventListener('click', ()=>{
//   document.getElementById('movie-grid').innerHTML = sortedNew;
// })

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



// Add to Cart

const addItem = document.getElementById('btn');

addItem.addEventListener('click', ()=>{
  console.log(addItem);
  document.getElementById('cart-counter').innerText = +1;
})

// ///

const inStock = data.slice(0);

inStock.sort(function(a,b) {
  return a.stock - b.stock;
});
console.log(inStock);

function addToCart(){
  const btn = document.getElementById('btn');
  const cartCounter = document.getElementById('cart-counter');
 

  // for(let i = 0; i < movie.length; i++) {
  //   let title = movie[i].querySelector('.title');

  //   if(title.innerText.toUpperCase().indexOf(input) > -1) {
  //     movie[i].style.display = "";
  //   } else {
  //     movie[i].style.display = "none";
  //   }
  // }
};


// (function(){

//     const cart = document.getElementById('cart');
//     const cartContainer = document.getElementById('cart');
  
//     cart.addEventListener('click', function(){
//       cartContainer.classList.toggle('show-cart')
//     })
//   }
// )();


// Filter
function genre() {
    data.map((item, i) =>{
    return item.filter(movie => movie.genre == "Horror");
    
})
}
console.log();

// aaaaaaaaaaaa

// function sortCards(property, cards) {
//     cards.sort(function(a,b){
//       //Return 0 if the same
//       if(a[property] == b[property] ) {
//         return 0;
//       }
      
//       //Grab property values
//       var a = a[property]; 
//       var b = b[property];
      
//       //Handle numbers correctly
//       if(property == "price") {
//         //Make numbers if price - strip $ and ,
//         a = parseFloat(a.replace(/\£|,/g, ""));
//         b = parseFloat(b.replace(/\£|,/g, ""));
//       }
      
//       //Normal sort return
//       return a > b ? 1 : -1;
//     })
//   }