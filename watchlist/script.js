let savedMoviesTag = JSON.parse(localStorage.getItem('savedmovies'))
const movieTab = document.getElementById('movie-list')
    const preText = document.getElementById('pre-text')


getSavedMovies()
async function getSavedMovies() {
    if(savedMoviesTag  && savedMoviesTag.length > 0){
const savedMovies = 
    await Promise.all(
    savedMoviesTag.map( async(tag) => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=8b62d32c&i=${tag}&plot=short`)
        const data = await res.json()
        return data
    })   
)
renderMovie(savedMovies)}
else {
    movieTab.innerHTML = `<div id="pre-text">
                <h3>Your watchlist is looking a little empty...</h3>
                <div id="pre-text-add"><a href="/search/index.html"><img src="/assets/add.png" ></a><h4>Let’s add some movies!</h4></div>
                </div>`
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
                            <p id="time">${element.Runtime}</p><p id="genre">${element.Genre}</p><img src="/assets/remove.png" class="remove" data-movie="${element.imdbID}"><h3 id="remove">Remove</h3>
                        </div>
                        <div id="line-2">
                            <p id="plot">${element.Plot}</p>
                        </div>
                    </div>
                     </div>`
    });
        movieTab.innerHTML = template 
        document.querySelectorAll('.remove').forEach(movie => {
        movie.addEventListener('click',function(){
        let toBeremoved = movie.getAttribute('data-movie')
        const index = savedMoviesTag.indexOf(toBeremoved);
    if(index !== -1){
        savedMoviesTag.splice(index,1)
        localStorage.setItem('savedmovies',JSON.stringify(savedMoviesTag))
        alert('Removed from Watchlist')
        console.log(JSON.parse(localStorage.getItem('savedmovies')))
        getSavedMovies();
        }})
});
}
