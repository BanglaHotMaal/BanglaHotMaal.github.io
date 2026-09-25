<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>De Bash Movies</title>
<meta name="description" content="De Bash Movies - Movies, trailers and entertainment">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  background:#08090d;
  color:#fff;
  font-family:Arial,Helvetica,sans-serif;
}

/* HEADER */
header{
  position:sticky;
  top:0;
  z-index:100;
  background:rgba(12,13,18,.97);
  border-bottom:1px solid #252731;
  backdrop-filter:blur(10px);
}

.header-inner{
  max-width:1200px;
  margin:auto;
  padding:15px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.logo{
  font-size:24px;
  font-weight:800;
}

.logo span{
  color:#e50914;
}

nav{
  display:flex;
  gap:22px;
}

nav a{
  color:#ddd;
  text-decoration:none;
  font-size:14px;
}

nav a:hover{
  color:#e50914;
}

/* HERO */
.hero{
  min-height:420px;
  display:flex;
  align-items:center;
  background:
    linear-gradient(90deg,#08090d 10%,rgba(8,9,13,.78),rgba(8,9,13,.25)),
    linear-gradient(135deg,#292c38,#0d0f15);
}

.hero-inner{
  width:100%;
  max-width:1200px;
  margin:auto;
  padding:70px 20px;
}

.hero-content{
  max-width:650px;
}

.hero small{
  color:#e50914;
  font-weight:bold;
  letter-spacing:1px;
}

.hero h1{
  font-size:48px;
  line-height:1.1;
  margin:12px 0 16px;
}

.hero p{
  color:#b8bac2;
  line-height:1.7;
  max-width:580px;
}

.hero-buttons{
  margin-top:25px;
  display:flex;
  gap:12px;
}

.btn{
  border:0;
  border-radius:7px;
  padding:13px 22px;
  cursor:pointer;
  font-weight:bold;
  font-size:14px;
}

.btn-primary{
  background:#e50914;
  color:#fff;
}

.btn-secondary{
  background:#292c35;
  color:#fff;
}

/* SEARCH */
.search-area{
  max-width:1200px;
  margin:auto;
  padding:25px 20px 5px;
}

.search-box input{
  width:100%;
  padding:15px 18px;
  border:1px solid #30323b;
  border-radius:8px;
  background:#15171d;
  color:#fff;
  outline:none;
  font-size:15px;
}

.search-box input:focus{
  border-color:#e50914;
}

/* MAIN */
.container{
  max-width:1200px;
  margin:auto;
  padding:20px;
}

.section{
  margin-top:25px;
}

.section-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:18px;
}

.section-title{
  font-size:23px;
}

.section-subtitle{
  color:#777;
  font-size:13px;
}

/* CATEGORY */
.categories{
  display:flex;
  gap:10px;
  overflow-x:auto;
  padding-bottom:8px;
}

.categories::-webkit-scrollbar{
  height:4px;
}

.category{
  flex:0 0 auto;
  background:#171920;
  border:1px solid #292b34;
  color:#ccc;
  padding:9px 17px;
  border-radius:20px;
  cursor:pointer;
  font-size:13px;
}

.category.active,
.category:hover{
  background:#e50914;
  border-color:#e50914;
  color:#fff;
}

/* MOVIE GRID */
.movies{
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:18px;
}

.movie-card{
  background:#14161c;
  border:1px solid #23252d;
  border-radius:9px;
  overflow:hidden;
  transition:.2s;
}

.movie-card:hover{
  transform:translateY(-5px);
  border-color:#3b3e49;
}

/* POSTER */
.poster{
  height:270px;
  background:linear-gradient(135deg,#343741,#171920);
  position:relative;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#777;
  font-size:13px;
}

.poster img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.poster-badge{
  position:absolute;
  top:10px;
  left:10px;
  background:#e50914;
  padding:5px 8px;
  border-radius:4px;
  font-size:11px;
  font-weight:bold;
  z-index:2;
}

/* MOVIE INFO */
.movie-info{
  padding:13px;
}

.movie-title{
  font-size:15px;
  margin-bottom:7px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.movie-meta{
  color:#858791;
  font-size:12px;
  margin-bottom:12px;
}

.watch-btn{
  width:100%;
  padding:9px;
  border:0;
  border-radius:5px;
  background:#252832;
  color:#fff;
  cursor:pointer;
}

.watch-btn:hover{
  background:#e50914;
}

/* NO RESULT */
.no-result{
  display:none;
  text-align:center;
  padding:40px;
  color:#777;
}

/* MODAL */
.modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:200;
  background:rgba(0,0,0,.9);
  padding:20px;
  align-items:center;
  justify-content:center;
}

.modal-box{
  width:100%;
  max-width:750px;
  max-height:90vh;
  overflow:auto;
  background:#15171d;
  border:1px solid #30323b;
  border-radius:12px;
  padding:20px;
}

.modal-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;
}

.close{
  border:0;
  background:none;
  color:#fff;
  font-size:28px;
  cursor:pointer;
}

.video-box{
  width:100%;
  aspect-ratio:16/9;
  background:#050505;
  border-radius:8px;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#666;
  margin-bottom:18px;
}

.video-box video{
  width:100%;
  height:100%;
  object-fit:contain;
}

.modal-title{
  font-size:23px;
  margin-bottom:8px;
}

.modal-meta{
  color:#888;
  font-size:13px;
  margin-bottom:14px;
}

.modal-description{
  color:#aaa;
  line-height:1.7;
  margin-bottom:20px;
}

/* FOOTER */
footer{
  border-top:1px solid #24262e;
  background:#0d0e12;
  padding:35px 20px;
  text-align:center;
  color:#777;
  margin-top:30px;
}

.footer-logo{
  color:#fff;
  font-weight:bold;
  font-size:20px;
  margin-bottom:10px;
}

.footer-logo span{
  color:#e50914;
}

footer p{
  font-size:13px;
}

/* RESPONSIVE */
@media(max-width:1000px){
  .movies{
    grid-template-columns:repeat(4,1fr);
  }
}

@media(max-width:750px){

  nav{
    display:none;
  }

  .hero{
    min-height:360px;
  }

  .hero h1{
    font-size:36px;
  }

  .movies{
    grid-template-columns:repeat(3,1fr);
    gap:12px;
  }

  .poster{
    height:220px;
  }
}

@media(max-width:520px){

  .header-inner{
    padding:14px 15px;
  }

  .logo{
    font-size:20px;
  }

  .hero-inner{
    padding:55px 18px;
  }

  .hero h1{
    font-size:31px;
  }

  .container,
  .search-area{
    padding-left:15px;
    padding-right:15px;
  }

  .movies{
    grid-template-columns:repeat(2,1fr);
    gap:10px;
  }

  .poster{
    height:205px;
  }

  .movie-info{
    padding:10px;
  }

  .movie-title{
    font-size:14px;
  }

  .hero-buttons{
    flex-wrap:wrap;
  }
}
</style>
</head>

<body>

<!-- HEADER -->
<header>
  <div class="header-inner">

    <div class="logo">
      De Bash <span>Movies</span>
    </div>

    <nav>
      <a href="#home">Home</a>
      <a href="#movies">Movies</a>
      <a href="#categories">Categories</a>
    </nav>

  </div>
</header>


<!-- HERO -->
<section class="hero" id="home">

  <div class="hero-inner">

    <div class="hero-content">

      <small>WELCOME TO DE BASH MOVIES</small>

      <h1>Movies & Entertainment</h1>

      <p>
        Discover movies, trailers and entertainment
        in one place.
      </p>

      <div class="hero-buttons">

        <button class="btn btn-primary"
          onclick="scrollToMovies()">
          ▶ Explore Movies
        </button>

        <button class="btn btn-secondary"
          onclick="scrollToCategories()">
          Browse Categories
        </button>

      </div>

    </div>

  </div>

</section>


<!-- SEARCH -->
<div class="search-area">

  <div class="search-box">

    <input
      id="searchInput"
      type="text"
      placeholder="🔍 Search movies..."
      oninput="searchMovies()">

  </div>

</div>


<main class="container">


<!-- CATEGORIES -->
<section class="section" id="categories">

  <div class="section-header">

    <h2 class="section-title">
      🎭 Categories
    </h2>

  </div>

  <div class="categories" id="categoryList">

    <button class="category active"
      onclick="filterCategory('All',this)">
      All
    </button>

    <button class="category"
      onclick="filterCategory('Action',this)">
      Action
    </button>

    <button class="category"
      onclick="filterCategory('Comedy',this)">
      Comedy
    </button>

    <button class="category"
      onclick="filterCategory('Drama',this)">
      Drama
    </button>

    <button class="category"
      onclick="filterCategory('Thriller',this)">
      Thriller
    </button>

    <button class="category"
      onclick="filterCategory('Sci-Fi',this)">
      Sci-Fi
    </button>

    <button class="category"
      onclick="filterCategory('Animation',this)">
      Animation
    </button>

  </div>

</section>


<!-- MOVIES -->
<section class="section" id="movies">

  <div class="section-header">

    <h2 class="section-title">
      🔥 Featured Movies
    </h2>

    <span class="section-subtitle">
      Latest collection
    </span>

  </div>

  <div class="movies" id="movieGrid">
  </div>

  <div class="no-result" id="noResult">
    No movies found.
  </div>

</section>

</main>


<!-- MOVIE MODAL -->
<div class="modal" id="movieModal">

  <div class="modal-box">

    <div class="modal-top">

      <strong>Movie Details</strong>

      <button class="close"
        onclick="closeMovie()">
        ×
      </button>

    </div>


    <div class="video-box" id="videoContainer">

      <span>VIDEO PLAYER</span>

    </div>


    <h2 class="modal-title"
      id="modalTitle">
    </h2>

    <p class="modal-meta"
      id="modalMeta">
    </p>

    <p class="modal-description"
      id="modalDescription">
    </p>

    <button class="btn btn-primary"
      onclick="closeMovie()">
      Close
    </button>

  </div>

</div>


<!-- FOOTER -->
<footer>

  <div class="footer-logo">
    De Bash <span>Movies</span>
  </div>

  <p>
    © 2026 De Bash Movies. All rights reserved.
  </p>

</footer>


<!-- MOVIE DATABASE -->
<script src="movies.js"></script>


<script>

/* MOVIE GRID */

const movieGrid =
document.getElementById("movieGrid");


function displayMovies(list){

  movieGrid.innerHTML="";

  list.forEach(movie=>{

    const card =
    document.createElement("article");

    card.className="movie-card";

    card.dataset.title =
    movie.title.toLowerCase();

    card.dataset.category =
    movie.category;


    const posterContent =
    movie.poster
    ?
    `<img src="${movie.poster}" alt="${movie.title}">`
    :
    `MOVIE POSTER`;


    card.innerHTML=`

      <div class="poster">

        <span class="poster-badge">
          ${movie.quality || "HD"}
        </span>

        ${posterContent}

      </div>

      <div class="movie-info">

        <h3 class="movie-title">
          ${movie.title}
        </h3>

        <p class="movie-meta">
          ${movie.category} • ${movie.year}
        </p>

        <button class="watch-btn"
          onclick='openMovie(
            ${JSON.stringify(movie.title)},
            ${JSON.stringify(movie.category + " • " + movie.year)},
            ${JSON.stringify(movie.description || "Movie details coming soon.")},
            ${JSON.stringify(movie.video || "")}
          )'>

          ▶ Watch Details

        </button>

      </div>
    `;

    movieGrid.appendChild(card);

  });


  document.getElementById("noResult")
    .style.display =
    list.length===0 ? "block" : "none";
}


/* INITIAL LOAD */

if(typeof movies !== "undefined"){
  displayMovies(movies);
}


/* SEARCH */

function searchMovies(){

  const value =
  document.getElementById("searchInput")
  .value
  .toLowerCase()
  .trim();

  const filtered =
  movies.filter(movie =>
    movie.title.toLowerCase()
    .includes(value)
  );

  displayMovies(filtered);
}


/* CATEGORY */

function filterCategory(category,button){

  document
  .querySelectorAll(".category")
  .forEach(btn=>{
    btn.classList.remove("active");
  });

  button.classList.add("active");


  if(category==="All"){

    displayMovies(movies);

    return;
  }


  const filtered =
  movies.filter(movie =>
    movie.category===category
  );

  displayMovies(filtered);
}


/* SCROLL */

function scrollToMovies(){

  document.getElementById("movies")
  .scrollIntoView({
    behavior:"smooth"
  });

}


function scrollToCategories(){

  document.getElementById("categories")
  .scrollIntoView({
    behavior:"smooth"
  });

}


/* MOVIE DETAILS */

function openMovie(
  title,
  meta,
  description,
  video
){

  document.getElementById("modalTitle")
  .innerText=title;

  document.getElementById("modalMeta")
  .innerText=meta;

  document.getElementById("modalDescription")
  .innerText=description;


  const container =
  document.getElementById("videoContainer");


  if(video){

    container.innerHTML=`

      <video
        controls
        playsinline
        preload="metadata">

        <source
          src="${video}"
          type="video/mp4">

        Your browser does not support
        video playback.

      </video>
    `;

  }else{

    container.innerHTML=`
      <span>
        Video will be available here.
      </span>
    `;

  }


  document.getElementById("movieModal")
  .style.display="flex";

}


/* CLOSE */

function closeMovie(){

  const container =
  document.getElementById("videoContainer");

  container.innerHTML=
  `<span>VIDEO PLAYER</span>`;

  document.getElementById("movieModal")
  .style.display="none";
}


/* OUTSIDE CLICK */

document
.getElementById("movieModal")
.addEventListener(
  "click",
  function(e){

    if(e.target===this){
      closeMovie();
    }

  }
);

</script>

</body>
</html>
