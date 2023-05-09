import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import { URL, API_KEY } from '../pages/Home';

const Reviews = () => {
    const {movieId} = useParams()

    const [reviews, setMovieReviews] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)

      .then((response) => {
        setMovieReviews(response.data.results);
      })

      .catch((error) => {
        console.log(error);
      });

    }, [movieId])

    return (
        <>
        {reviews.length !== 0 ? <ul>
            {reviews.map((review) => (
                <li key={review.id}>
                    <h2>Author: {review.author}</h2>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul> : <p> We don't have any reviews for this movie. </p>}
        </>
      )
}

export default Reviews;