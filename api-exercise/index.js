fetch('https://showtimes.everyday.in.th/api/v2/movie/')
    .then(response => response.json())
    .then((data) => {
        // console.log(data.results.title);
        let movies = "";
        data.results.map((values) => {
            movies += `<div class="movies">
            <h2 class="title">${values.title}</h2>
            <img src="${values.images}" alt="img" class="poster">
            <p>${values.details}</p>
            <p>${values.id}</p>
        </div>`
        });
        document.getElementById("movie-grid").innerHTML = movies;
        
      }).catch((error) => {
        console.log(error);
      });
