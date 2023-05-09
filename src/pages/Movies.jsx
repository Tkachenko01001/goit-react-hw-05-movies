import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { URL, API_KEY } from '../pages/Home';

const Movies = () => {

    const [movieName, setMovieName] = useState('');
    const [moviesOnDemand, setMoviesOnDemand] = useState([]);

    useEffect(() => {
        if (movieName) {
          axios.get(`${URL}/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
            .then((response) => {
              setMoviesOnDemand(response.data.results)
            })
        }
      }, [movieName])

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovieName(e.target[0].value)
    }

    return ( <>
        <form onSubmit={handleSubmit} className="search-form">
  <input type="search" />
  <button type="submit" className="btn-search">Search</button>
</form>
<div>
  {moviesOnDemand.length > 0 &&
    <ul className="movie-list">
      {moviesOnDemand.map((movie) => (
        <li key={movie.id} className='movie-list_line'> <Link to={`${movie.id}`}>{movie.title}</Link> </li>
      ))}
    </ul>
  }
</div>
      </>
    )
  }

export default Movies