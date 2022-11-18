let data = [
    {
        "id": 1,
        "title": "Deadpool",
        "genre": [
          "Action",
          "Comedy"
        ],
        "year": 2016,
        "price": "£15.50",
        "bluray": true,
        "stock": 2
      },
      {
        "id": 2,
        "title": "Paranormal Activity",
        "genre": [
          "Horror",
          "Mystery"
        ],
        "year": 1996,
        "price": "£9.65",
        "bluray": false,
        "stock": 5
      },
      {
        "id": 3,
        "title": "Donnie Darko",
        "genre": [
          "Drama",
          "Mystery"
        ],
        "year": 2001,
        "price": "£6.99",
        "bluray": false,
        "stock": 1
      },
      {
        "id": 4,
        "title": "Eat",
        "genre": [
          "Drama",
          "Horror"
        ],
        "year": 2000,
        "price": "£12.09",
        "bluray": true,
        "stock": 11
      },
      {
        "id": 5,
        "title": "Paranormal Activity 2",
        "genre": [
          "Horror",
          "Mystery"
        ],
        "year": 2010,
        "price": "£9.65",
        "bluray": false,
        "stock": 11
      },
      {
        "id": 6,
        "title": "Thieves (Voleurs, Les)",
        "genre": [
          "Crime",
          "Drama",
          "Romance"
        ],
        "year": 1995,
        "price": "£2.22",
        "bluray": false,
        "stock": 13
      },
      {
        "id": 7,
        "title": "Inception",
        "genre": [
          "Action",
          "Sci-Fi"
        ],
        "year": 2010,
        "price": "£15.99",
        "bluray": true,
        "stock": 4
      },
      {
        "id": 8,
        "title": "The Matrix",
        "genre": [
          "Action",
          "Sci-Fi"
        ],
        "year": 1999,
        "price": "£9.50",
        "bluray": false,
        "stock": 0
      },
      {
        "id": 9,
        "title": "Interstellar",
        "genre": [
          "Adventure",
          "Drama",
          "Sci-Fi"
        ],
        "year": 2014,
        "price": "£22.00",
        "bluray": true,
        "stock": 8
      },
      {
        "id": 10,
        "title": "Alien",
        "genre": [
          "Horror"
        ],
        "year": 1979,
        "price": "£8.99",
        "bluray": false,
        "stock": 6
      },
      {
        "id": 11,
        "title": "Back to the Future",
        "genre": [
          "Adventure",
          "Comedy",
          "Sci-Fi"
        ],
        "year": 1985,
        "price": "£9.99",
        "bluray": false,
        "stock": 15
      },
      {
        "id": 12,
        "title": "The Prestige",
        "genre": [
          "Drama",
          "Mystery",
          "Sci-Fi"
        ],
        "year": 2006,
        "price": "£13.90",
        "bluray": true,
        "stock": 13
      },
      {
        "id": 13,
        "title": "Avengers: Endgame",
        "genre": [
          "Action",
          "Drama"
        ],
        "year": 2019,
        "price": "£20.09",
        "bluray": true,
        "stock": 1
      },
      {
        "id": 14,
        "title": "Avengers: Infinity War",
        "genre": [
          "Action",
          "Sci-Fi"
        ],
        "year": 2018,
        "price": "£19.99",
        "bluray": true,
        "stock": 0
      },
      {
        "id": 15,
        "title": "V for Vendetta",
        "genre": [
          "Action",
          "Drama",
          "Sci-Fi"
        ],
        "year": 2005,
        "price": "£21.02",
        "bluray": false,
        "stock": 5
      },
      {
        "id": 16,
        "title": "Jurassic Park",
        "genre": [
          "Action",
          "Adventure",
          "Sci-Fi"
        ],
        "year": 1993,
        "price": "£10.00",
        "bluray": false,
        "stock": 4
      },
      {
        "id": 17,
        "title": "The Thing",
        "genre": [
          "Horror",
          "Mystery"
        ],
        "year": 1982,
        "price": "£8.65",
        "bluray": false,
        "stock": 2
      },
      {
        "id": 18,
        "title": "Logan",
        "genre": [
          "Action",
          "Drama",
          "Sci-Fi"
        ],
        "year": 2017,
        "price": "£13.20",
        "bluray": true,
        "stock": 9
      },
      {
        "id": 19,
        "title": "Scream",
        "genre": [
          "Horror",
          "Mystery",
        ],
        "year": 1996,
        "price": "£9.20",
        "bluray": false,
        "stock": 8
      },
      {
        "id": 20,
        "title": "The Naked Gun",
        "genre": [
          "Comedy"
        ],
        "year": 1988,
        "price": "£13.70",
        "bluray": false,
        "stock": 13
      },
      {
        "id": 21,
        "title": "Rush Hour",
        "genre": [
          "Action",
          "Comedy"
        ],
        "year": 1998,
        "price": "£8.50",
        "bluray": true,
        "stock": 5
      },
      {
        "id": 22,
        "title": "Hot Fuzz",
        "genre": [
          "Comedy",
          "Mystery"
        ],
        "year": 2007,
        "price": "£11.10",
        "bluray": true,
        "stock": 4
      },
      {
        "id": 23,
        "title": "Knives Out",
        "genre": [
          "Comedy",
          "Mystery"
        ],
        "year": 2019,
        "price": "£16.60",
        "bluray": true,
        "stock": 6
      },
      {
        "id": 24,
        "title": "Scary Movie",
        "genre": [
          "Comedy",
          "Horror"
        ],
        "year": 2000,
        "price": "£5.90",
        "bluray": true,
        "stock": 5
      }
];
// *********************************************************

function addToCart(){
  const btn = document.getElementById('btn');
  const cartCounter = document.getElementById('cart-counter');

  for(let i = 0; i < data.length; i++){
    if(data[i].stock > 0) {
      console.log(`${data[i].title} in stock`)
    } else {
      console.log(`${data[i].title} not in stock`)
    }
  }
}

// data.forEach((dvd) =>{
//   if(dvd.stock > 0) {
//     // console.log(dvd.stock)
//     const cartCounter = document.getElementById('cart-counter');
//     cartCounter.innerText= 1;
//   } 
// })

// let inStock = data.filter(obj => obj.stock > 0);

// console.log(inStock);
