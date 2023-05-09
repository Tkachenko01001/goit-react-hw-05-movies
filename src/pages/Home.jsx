import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const URL = 'https://api.themoviedb.org/';
export const API_KEY = '9966181ff2d8ade1b3b30b053a683c00';

const Home = () => {
    
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect (() => {

    axios.get(`${URL}/3/trending/movie/day?api_key=${API_KEY}`)

      .then((response) => {
        setTrendingMovies(response.data.results);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}> <Link to={`/movies/${movie.id}`}>{movie.title}</Link> </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;