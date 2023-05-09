import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import { URL, API_KEY } from '../pages/Home';

const Cast = () => {
    const {movieId} = useParams()

    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)

      .then((response) => {
            setMovieCast(response.data.cast)
      })

      .catch((error) => {
        console.log(error);
      });

    }, [movieId])

    return (
        <>
          {movieCast && 
          <ul>
          {movieCast.map((cast) => (
            <li key={cast.id}>
              <figure>
                <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} /> 
                <figcaption>
                  <p>{cast.name}</p>
                  <p>character: {cast.character}</p>
                </figcaption>
              </figure>
            </li> 
          ))}
        </ul>}
        </>
      )
}

export default Cast;