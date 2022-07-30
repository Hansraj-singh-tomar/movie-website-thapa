import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { API_URL } from './context';
import { NavLink } from 'react-router-dom';

const SingleMovie = () => {
  const { id } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie,setMovie] = useState("");
  
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response === 'True'){
            setIsLoading(false);
            setMovie(data);
        }
    } catch (error) {
        console.log(error);
    }
  }
  // Debouncing code 
  useEffect(() => {
    let timeoutId = setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
    },800);
    return () => {
        clearTimeout(timeoutId);  // isse aage ka sara delete ho jayega sirf at the end vala rhega uske base par hame result show hoga
    }
  }, [id]);
  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    )
  }
  return (
    
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className='card-content'>
            <p className='title'> {movie.Title} </p>
            <p className=''></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn">Go Back</NavLink>
          </div>
        </div>
      </section>
    
  )
}

export default SingleMovie