// Cards

let dvd = "";
data.forEach((movies) =>{
    dvd += 
    `<div class="cards" id="cards">
        <h2 class="title">${movies.title}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/768px-DVD_logo.svg.png?20220618105447" alt="dvd" class="poster">
        <p class="genre">${movies.genre}</p>
        <p>Year: ${movies.year}</p>
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button onClick= cartCounter() class="btn" id="btn" type="submit">Add to Basket</button>
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
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
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
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
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
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
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
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
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

// Loading

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  const removeItem = document.getElementsByClassName('product-remove');
  for (let i = 0; i < removeItem.length; i++) {
    const bin = removeItem[i];
    bin.addEventListener("click", removeCartItem)
  } 

  let quantityInput = document.getElementsByClassName('product-quantity');
  for (let i = 0; i < quantityInput.length; i++) {
    const input = quantityInput[i];
    input.addEventListener('change', quantityChanged)
  }

  const addBtn = document.getElementsByClassName('btn');
  for (let i = 0; i < addBtn.length; i++) {
    const button = addBtn[i]
    button.addEventListener('click', addToCart)
  }

  document.getElementsByClassName('btn-buy')[0].addEventListener('click', purchased)
}

// Purchase

function purchased() {
  alert('Thank you for your purchase')
  let cartItems = document.getElementsByClassName('cart-content')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

// Remove item from Cart

function removeCartItem(event) {
  let removedItem = event.target;
  removedItem.parentElement.remove();
  updateCartTotal()
}

// Cart

const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart-container');
const closeCart = document.getElementById('cart-close');

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Add to cart

function addToCart(event) {
  let button = event.target;
  let shopItem = button.parentElement;
  let title = shopItem.getElementsByClassName('title')[0].innerText;
  let price = shopItem.getElementsByClassName('price')[0].innerText;
  let imageSrc = shopItem.getElementsByClassName('poster')[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement('div');
  let cartItem = document.getElementsByClassName('cart-content')[0];
  let cartItemTitle = cartItem.getElementsByClassName('cart-product-title');
  for (let i = 0; i < cartItemTitle.length; i++) {
    if (cartItemTitle[i].innerText == title) {
      alert('This item is already added to the cart')
      return
    } ;
  }
  let cartContent = `
    <div class="cart-item">
      <img src="${imageSrc}" alt="dvd" class="poster">
      <div class="detail-box">
          <div class="cart-product-title">${title}</div>
          <div class="cart-product-price">${price}</div>
          <input type="number" value="1" class="product-quantity">
      </div>
      <span class="material-symbols-outlined product-remove">
          delete
      </span>
    </div> `;
 
  cartRow.innerHTML = cartContent;
  cartItem.append(cartRow)
  cartRow.getElementsByClassName('product-remove')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('product-quantity')[0].addEventListener('change', quantityChanged)
}

// Quantity

function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <=0) {
    input.value = 1
  }
  updateCartTotal()
}


function updateCartTotal() {
  const cartContent = document.getElementsByClassName('cart-content')[0];
  const cartItems = cartContent.getElementsByClassName('cart-item');
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const priceElement = cartItem.getElementsByClassName('cart-product-price')[0];
    const quantity = cartItem.getElementsByClassName('product-quantity')[0].value;
    const price = parseFloat(priceElement.innerText.replace('£', ''));
    total += (price * quantity);
  }
  total = total.toFixed(2);
  document.getElementsByClassName('total-price')[0].innerText = '£' + total;
}


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
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
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
        <p class="price">${movies.price}</p>
        <p class="stock">In Stock: ${movies.stock}</p>
        <button class="btn" id="btn" type="submit">Add to Basket</button>
    </div>`
});

function secondPage() {
  document.getElementById('movie-grid').innerHTML = nextPage;
};