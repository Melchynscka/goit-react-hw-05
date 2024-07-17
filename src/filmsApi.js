import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';

const headers = {
	// Замість api_read_access_token вставте свій токен
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODg1ZDYxNjdmMTlmYzM4OGU3MGRiZjE2NWFkYzVkNiIsIm5iZiI6MTcyMDg1ODY2OS4zNzYxNzUsInN1YiI6IjY2OTIzNDVjNzE1NWVmYWUwMWY3YTNkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7-ChkZpL-hGtrxXxTz7iZAoKZ1hOble1ywX84qoMwc'
	}

// Функція для отримання трендових фільмів
export  const fetchTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', {baseURL, headers});
  return response.data.results;
};

// Функція для отримання деталей фільму за його ID
export const getMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}`, { baseURL, headers });
  return response.data;
};

// Функція для отримання кредитів фільму за його ID
export const getCreditsById = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    baseURL,
    headers,
  });
  return response.data;
};

// Функція для отримання відгуків фільму за його ID
export const getReviewsById = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    baseURL,
    headers,
  });
  return response.data.results;
};

// Функція для пошуку фільмів за запитом
export const fetchSearchMovies = async searchQuery => {
  const response = await axios.get('search/movie', {
    baseURL,
    headers,
    params: {
      query: searchQuery,
    },
  });
  return response.data.results;
};