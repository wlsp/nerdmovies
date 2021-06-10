let movieTitle = document.getElementById("container_poster")




fetch('https://api.themoviedb.org/3/discover/movie?api_key=f625a82932aa570e803ce90d7fd4ca7f&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=true&page=10&with_watch_monetization_types=flatrate')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        movieTitle.innerHTML = `
        <img src="https://image.tmdb.org/t/p/original${json.results[17].poster_path}">
            
  `


    })



