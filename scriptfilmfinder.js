//Adding movies + links + posters to the DOM

const createLinks = (movie) => {
  selectMovies = document.getElementById("moviechoice");
  newLi = document.createElement("li");
  selectMovies.appendChild(newLi);
  newA = document.createElement("a");
  newLi.appendChild(newA);
  newA.href = `http://www.imdb.com/title/${movie.imdbID}`;
  newA.target = "_blank";
  newIMG = document.createElement("img");
  newIMG.src = movie.poster;
  newA.appendChild(newIMG);
};

const addMoviesToDOM = movies.map((movie) => {
  createLinks(movie);
});

//changing shown movielist
const replaceList = (newList) => {
  let oldList = document.getElementById("moviechoice");
  oldList.innerHTML = "";
  newList.forEach((movie) => {
    createLinks(movie);
  });
};

// change/switch on radiobuttons
const radioBTNS = Array.from(document.getElementsByName("movieoption"));

const handleOnchangeEvent = radioBTNS.forEach((event) => {
  event.addEventListener("change", (btn) => {
    replaceList(filterMoviesByName(btn.target.value.toLowerCase()));
    switch (btn.target.value.toLowerCase()) {
      case "latest":
        replaceList(filterLatest());
      case "avengers":
      case "x-men":
      case "princess":
      case "batman":
    }
  });
});

//filter movies

const filterMoviesByName = (wordInMovie) => {
  let newList = movies.filter((movie) => {
    if (movie.title.toLocaleLowerCase().includes(wordInMovie)) {
      return movie;
    }
  });
  return newList;
};

const filterLatest = () => {
  let newList = movies.filter((movie) => movie.year >= 2014);
  return newList;
};

//Searchbar
const searchBar = document.getElementById("searchbar").querySelector("input");

searchBar.addEventListener("input", (input) => {
  let inputValue = searchBar.value.toLowerCase();
  let newList = movies.filter((movie) => {
    if (movie.title.toLowerCase().includes(inputValue.toLowerCase())) {
      return movie;
    }
  });
  replaceList(newList);
});
