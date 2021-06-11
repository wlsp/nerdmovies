let movieOne = document.getElementById("container_posterOne");
let movieTwo = document.getElementById("container_posterTwo");
let movieThree = document.getElementById("container_posterThree");
let movieFour = document.getElementById("container_posterFour");






fetch('https://api.themoviedb.org/3/discover/movie?api_key=f625a82932aa570e803ce90d7fd4ca7f&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=true&page=10&with_watch_monetization_types=flatrate')

    .then(response => response.json())
    .then(json => {
        console.log(json)





        movieOne.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[16].poster_path}" >`
        movieTwo.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[9].poster_path}" >`
        movieThree.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[7].poster_path}" >`
        movieFour.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[4].poster_path}" >`




    })


