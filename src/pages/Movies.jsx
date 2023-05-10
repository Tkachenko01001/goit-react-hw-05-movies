import axios from "axios";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { URL, API_KEY } from '../pages/Home';

const Movies = () => {

  const [moviesOnDemand, setMoviesOnDemand] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setMoviesOnDemand([]);
      return;
    }
    axios.get(`${URL}/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((response) => {
        setMoviesOnDemand(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
      return alert(`Sorry, but we didn't find any results for "${query}"`);
    }
    setSearchParams({query: value});
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="search" value={value} onChange={handleInputChange} />
        <button type="submit" className="btn-search">Search</button>
      </form>
      {moviesOnDemand.length > 0 &&
        <ul className="movie-list">
          {moviesOnDemand.map((movie) => (
            <li key={movie.id} className='movie-list_line'> <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link> </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Movies;




