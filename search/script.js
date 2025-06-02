const searchBtn = document.getElementById('seach-btn')
const searchText = document.getElementById('search-input')
const movieTab = document.getElementById('movie-list')
const preText = document.getElementById('pre-text')

searchBtn.addEventListener('click',getData)

let savedMovies = []
async function getData() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=8b62d32c&s=${searchText.value}`)
    const data = await response.json()
    if (data.Search) {
        // Fetch details for each movie
        const detailedMovies = await Promise.all(
            data.Search.map(async (movie) => {
                const res = await fetch(`http://www.omdbapi.com/?apikey=8b62d32c&i=${movie.imdbID}&plot=short`)
                return await res.json(); // Return the movie object directly
            })
        )
        console.log(detailedMovies); // This will be an array of movie objects
        renderMovie(detailedMovies)
    }
    else{
        preText.innerHTML =`<h3>Unable to find what you’re looking for. Please try another search.</h3>`
    }
}

function renderMovie(array){
    let template = ``
    array.forEach(element => {
           template += `<div class="movie-tab" ">
                    <img src="${element.Poster}" id="poster">
                    <div id="movie-details">
                        <div id="line-1">
                            <h3 id="title">${element.Title}</h3><img src="/assets/star.png" id="star"><p>${element.imdbRating}</p>
                        </div>
                        <div id="line-1">
                            <p id="time">${element.Runtime}</p><p id="genre">${element.Genre}</p><img src="/assets/add.png" class="add" data-movie="${element.imdbID}"><h3 id="watchlist">Watchlist</h3>
                        </div>
                        <div id="line-2">
                            <p id="plot">${element.Plot}</p>
                        </div>
                    </div>
                     </div>`
    });
        movieTab.innerHTML = template 
        document.querySelectorAll('.add').forEach(movie => {
        movie.addEventListener('click',function(){
        savedMovies.push(movie.getAttribute('data-movie'))
        alert('Added to Watchlist')
        localStorage.setItem('savedmovies',JSON.stringify(savedMovies))
        })
});
}



   