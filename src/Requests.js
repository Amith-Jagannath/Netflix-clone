const API_KEY = "7c4798bb3b4a367ca37d901f90c0d9c5";
const requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
