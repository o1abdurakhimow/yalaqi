import movies from "./movies.js";

const swiperWrapper = document.querySelector('.swiper-wrapper');

movies.slice(0, 100).forEach(movie => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="${movie.ImageURL}" alt="${movie.Title}">`;
  swiperWrapper.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let currentCategory = "all";

function displayMovies(list) {
  const grid = document.getElementById("movieGrid");

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <h3>No movies found</h3>
        <p>Try a different search or filter</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map((movie, i) => {
      const catClass = movie.Categories.toLowerCase();
      const ratingColor =
        movie.imdb_rating >= 8.5
          ? "#2ecc71"
          : movie.imdb_rating >= 7
          ? "#f5c518"
          : "#e67e22";
      return `
      <div class="card" style="animation-delay:${Math.min(i * 30, 400)}ms">
        <div class="card-poster">
          <img
            src="${movie.ImageURL}"
            alt="${escHtml(movie.Title)}"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="card-poster-fallback" style="display:none">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="3"/><path d="M8 2v20M2 12h20"/>
            </svg>
            <span>${escHtml(movie.Title)}</span>
          </div>

          <span class="category-badge ${catClass}">${movie.Categories}</span>
          <span class="rating-badge" style="border-color:${ratingColor}33;color:${ratingColor}">
            ★ ${movie.imdb_rating.toFixed(1)}
          </span>

          <div class="card-overlay">
            <p class="overlay-summary">${escHtml(movie.summary)}</p>
          </div>
        </div>

        <div class="card-body">
          <p class="card-title" title="${escHtml(movie.Title)}">${escHtml(
        movie.Title
      )}</p>
          <div class="card-meta">
            <span class="card-year">${movie.movie_year}</span>
            <span class="card-rating" style="color:${ratingColor}">★ ${movie.imdb_rating.toFixed(
        1
      )}</span>
          </div>
        </div>
      </div>`;
    })
    .join("");

  const avg = ( 
  list.reduce((s, m) => s + m.imdb_rating, 0) / list.length
  ).toFixed(2);
  document.getElementById("countLabel").innerHTML = `Showing <strong>${
    list.length
  }</strong> movie${list.length !== 1 ? "s" : ""}`;
  document.getElementById(
    "avgRating"
  ).innerHTML = `Avg rating: <strong style="color:var(--gold)">★ ${avg}</strong>`;
}

window.filterMovies = function () {
  let filtered = [...movies];
  const search = document.getElementById("searchInput").value.toLowerCase()
    .trim();
  const sort = document.getElementById("sort").value;

  if (search) {
    filtered = filtered.filter(
      (m) =>
        m.Title.toLowerCase().includes(search) ||
        m.summary.toLowerCase().includes(search)
    );
  }

  if (currentCategory !== "all") {
    filtered = filtered.filter((m) => m.Categories === currentCategory);
  }

  if (sort === "rating") filtered.sort((a, b) => b.imdb_rating - a.imdb_rating);
  if (sort === "letter") filtered.sort((a, b) => a.Title.localeCompare(b.Title));
  if (sort === "year_desc")
    filtered.sort((a, b) => b.movie_year - a.movie_year);
  if (sort === "year_asc") filtered.sort((a, b) => a.movie_year - b.movie_year);

  displayMovies(filtered);
};

window.setCategory = function (btn) {
  document
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.dataset.cat;
  filterMovies();
};

function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const scrollBtn = document.getElementById("scrollBtn");
window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 400);
});

displayMovies(movies);
