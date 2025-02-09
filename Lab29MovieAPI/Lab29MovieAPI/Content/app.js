document
  .querySelector('.category-movies')
  .addEventListener('click', getMovieByCategory);

function getAllMovies() {
  fetch(`http://localhost:63447/api/Movies`)
    .then(req => req.json())
    .then(res => {
      let display = '';
      let movieObject = {};
      res.forEach(movie => {
        movieObject = {
          Id: movie.MovieId,
          Title: movie.Title,
          Category: movie.Category,
          Year: movie.Year
        };

        display += `
        <div class="card col-md-3">
          <img class="card-img-top" src="./imgs/${
            movieObject.Title
            }.jpg" alt="${movieObject.Title}" style="height: 12rem !important;">
          <div class="card-body">
            <h5 class="card-title">${movieObject.Title}</h5>
            <p class="card-text">Category: ${movieObject.Category}</p>
            <p class="card-text">Released: ${movieObject.Year}</p>
            <a href="https://en.wikipedia.org/wiki/${
              movieObject.Title
            }_(film)" class="btn btn-outline-success" target="_new">IMDb</a>
          </div>
        </div>
        
        `;
        document.querySelector('.movieCards').innerHTML = display;
      });
    });
}

function getRandomMovie() {
  let display = '';
  let randomId = Math.floor(Math.random() * 10 + 1);
  let movieObject = {};

  fetch(`http://localhost:63447/api/Movies`)
    .then(req => req.json())
    .then(res => {
      res.forEach(movie => {
        movieObject = {
          Id: movie.MovieId,
          Title: movie.Title,
          Category: movie.Category,
          Year: movie.Year
        };
        if (movieObject.Id === randomId) {
            display += `
                <div class="card mt-5">
                  <img class="card-img-top" src="./imgs/${
                    movieObject.Title
                  }.jpg" alt="${movieObject.Title}" sytle="height: 12rem !important;">
                  <div class="card-body text-center">
                    <h5 class="card-title">${movieObject.Title}</h5>
                    <p class="card-text">Category: ${movieObject.Category}</p>
                    <p class="card-text">Released: ${movieObject.Year}</p>
                    <a href="https://en.wikipedia.org/wiki/${
                      movieObject.Title
                    }_(film)" class="btn btn-outline-success">IMDb</a>
                  </div>
                </div>
            `;
          document.querySelector('.movieCards').innerHTML = display;
        }
      });
    });
}

function getMovieByCategory() {
  fetch(`http://localhost:63447/api/Movies`)
    .then(req => req.json())
    .then(res => {
      let display = '';
      let movieObject = {};
      let catSearch = document.querySelector('.search-bar').value;

      res.forEach(movie => {
        movieObject = {
          Id: movie.MovieId,
          Title: movie.Title,
          Category: movie.Category,
          Year: movie.Year
        };

        if (catSearch.toLowerCase() === movieObject.Category.toLowerCase()) {
          display += `
          <div class="card mt-5 p-0 col-md-3" style="width: 7rem;">
          <img class="card-img-top" src="./imgs/${
            movieObject.Title
          }.jpg" alt="${movieObject.Title}" style="height: 20rem !important;">
          <div class="card-body">
          <h5 class="card-title">${movieObject.Title}</h5>
          <p class="card-text">Category: ${movieObject.Category}</p>
          <p class="card-text">Released: ${movieObject.Year}</p>
          <a href="https://en.wikipedia.org/wiki/${
            movieObject.Title
          }_(film)" class="btn btn-outline-success">IMDb</a>
          </div>
          </div>
          
          `;
          document.querySelector('.movieCards').innerHTML = display;
        }
      });
    });
}
