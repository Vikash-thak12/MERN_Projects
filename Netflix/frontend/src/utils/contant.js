export const API_END_POINT = "http://localhost:8000/api/user"
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjM4YjExOGI5MGI4NjcwYzM4MDNkYzNiOGIzOTQ5NiIsIm5iZiI6MTcxOTkyMjIxNS4wNDIxMTEsInN1YiI6IjY2ODNlZDFhYTNmMTRjNDdhMzkzMTBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hi8WeEpz9lGEqCiluc38eSj2NgfF39SJtl_4C-w8CY0'
    }
  };

export const Now_Playing_API = "https://api.themoviedb.org/3/movie/now_playing"
export const Popular_API = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_API = "https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_API = "https://api.themoviedb.org/3/movie/upcoming"
export const TMDB_Image_API = "https://image.tmdb.org/t/p/w500"
export const SEARCH_MOVIE_API = "https://api.themoviedb.org/3/search/movie?query="