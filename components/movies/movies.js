'use client';
import { useState, useEffect } from 'react';
const tmdbApiKey = '1829846e13ce79eb8bb3f9657075247f';

const fetchMoviesPage = async (page = 1) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbApiKey}`
        );
        const data = await response.json();
        return data.results; // List of movies on the specified page
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const moviesData = await fetchMoviesPage(1); // Fetch first page of movies
        setMovies(moviesData || []);
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <section className="py-5">
            <div className="container-fluid">
                <h3>Latest Releases</h3>
                <div className="row">
                    {movies.map((movie) => (
                        <div className="col-lg-3" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="img-fluid" />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                            <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
                </div>
        </section>
    );
};
export default MovieList;