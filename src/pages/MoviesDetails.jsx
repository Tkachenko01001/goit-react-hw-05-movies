import { useParams, Outlet, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios";
import { URL, API_KEY } from './Home';

const MoviesDetails = () => {
    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/3/movie/${movieId}?api_key=${API_KEY}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [movieId])

    function handleGoBack() {
      navigate(-1);
    }

    return (
        <div className='details'>
            <div>
                <button type='button' className='btn-back' onClick={handleGoBack}>Back</button>
            </div>
            {movie && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className='details__image' />
                    <h1 className='details__title'>{movie.title}</h1>
                    <p className='details__score'>User Score: {movie.vote_average * 10}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres:</h3>
                    <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                    <p>Additional information</p>
                    <ul className='details__list'>
                        <li className='details__list-line'>
                            <Link to="Cast" className='details__list-link'>Cast</Link>
                        </li>
                        <li className='details__list-line'>
                            <Link to="Reviews" className='details__list-link'>Reviews</Link>
                        </li>
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    );
};

export default MoviesDetails;