let movieOne = document.getElementById("container_posterOne");
let movieTwo = document.getElementById("container_posterTwo");
let movieThree = document.getElementById("container_posterThree");
let movieFour = document.getElementById("container_posterFour");

let movieTitle1 = document.getElementById("movieTitleOne");
let movieTitle2 = document.getElementById("movieTitleTwo");
let movieTitle3 = document.getElementById("movieTitleThree");
let movieTitle4 = document.getElementById("movieTitleFour");



fetch('https://api.themoviedb.org/3/discover/movie?api_key=f625a82932aa570e803ce90d7fd4ca7f&language=en-US&sort_by=primary_release_date.asc&include_adult=false&include_video=true&page=10&with_watch_monetization_types=flatrate')

    .then(response => response.json())
    .then(json => {
        console.log(json)

        movieOne.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[16].poster_path}" >`
        movieTwo.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[9].poster_path}" >`
        movieThree.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[7].poster_path}" >`
        movieFour.innerHTML = `<img src="https://image.tmdb.org/t/p/original${json.results[4].poster_path}" >`

        movieTitle1.innerHTML = `${json.results[16].original_title}`
        movieTitle2.innerHTML = `${json.results[9].original_title}`
        movieTitle3.innerHTML = `${json.results[7].original_title}`
        movieTitle4.innerHTML = `${json.results[4].original_title}`

    });


// When the user clicks on div, open the popup
const  myFunctionOne = () => {
    var popup = document.getElementById("myPopupOne");
    popup.classList.toggle("show");
  }
  const  myFunctionTwo = () => {
    var popup = document.getElementById("myPopupTwo");
    popup.classList.toggle("show");
  }
  const  myFunctionThree = () => {
    var popup = document.getElementById("myPopupThree");
    popup.classList.toggle("show");
  }
  const  myFunctionFour = () => {
    var popup = document.getElementById("myPopupFour");
    popup.classList.toggle("show");
  }