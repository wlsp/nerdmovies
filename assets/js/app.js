let moviePoster = document.getElementById("container_poster")
const left = document.querySelector('.left');
const right = document.querySelector('.right');





fetch('https://api.themoviedb.org/3/discover/movie?api_key=f625a82932aa570e803ce90d7fd4ca7f&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=true&page=10&with_watch_monetization_types=flatrate')

    .then(response => response.json())
    .then(json => {
        console.log(json)





        moviePoster.innerHTML =
            `<img src="https://image.tmdb.org/t/p/original${json.results[16].poster_path}" >`

        right.addEventListener("click", nextClick)


        function nextClick() {
            if (right) {
                moviePoster.innerHTML =
                    `<img src="https://image.tmdb.org/t/p/original${json.results[9].poster_path}" >`
            } else if (right) {
                moviePoster.innerHTML =
                    `<img src="https://image.tmdb.org/t/p/original${json.results[7].poster_path}" >`
            }
        }


    })


