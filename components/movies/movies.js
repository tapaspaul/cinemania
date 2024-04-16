'use client';
import { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './movies.module.css';
import Link from 'next/link';
const tmdbApiKey = '1829846e13ce79eb8bb3f9657075247f';

const fetchMoviesPage = async (page = 1) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbApiKey}`
        );
        const data = await response.json();
        console.log(data);
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const moviesData = await fetchMoviesPage(1);
        setMovies(moviesData || []);
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <section className="px-3 py-5">
            <div className="container-fluid">
                <h3 className="sec-title">Latest Releases</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{
                        type: 'progressbar',
                    }}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        767: { slidesPerView: 3 },
                        991: { slidesPerView: 4 },
                        1199: { slidesPerView: 5 },
                        1440: { slidesPerView: 6 }
                    }}
                    className="pt-5"
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={ movie.id }>
                            <div className={ `${ classes['movie-content'] } position-relative overflow-hidden` }>
                                <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} alt={movie.title} className="img-fluid transition-6" />
                                <div className={`${ classes.desc } px-3 pb-3 position-absolute start-0 end-0 bottom-0 transition-4`}>
                                    <h4 className={ classes.title }>
                                        <Link href={`/movies/${ movie.id }`} className="text-white">{ movie.title }</Link>
                                    </h4>
                                    <p className={ classes.date }>{ formatDate( movie.release_date) }</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default MovieList;