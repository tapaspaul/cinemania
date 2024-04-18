'use client';
import { useState, useEffect } from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './movies.module.css';
import Link from "next/link";
import MoviesSkeleton from "./movies-skeleton";
import MovieError from "./movie-error";

const API_KEY = '1829846e13ce79eb8bb3f9657075247f';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

const TopRated = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchTopRatedMovies(){
            setIsFetching(true);
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
                const responseData = await response.json();
                if(!response.ok) throw new Error('Failed to Fetch Movies');
                setTopRatedMovies(responseData.results || []);
            }catch(error){
                setError({message: error.message || 'Could not find Movies, Please try again later.'});
            }
            setIsFetching(false);
        }
        fetchTopRatedMovies();
    }, []);
    if(error){
        return <MovieError title="An Error Occured!" message={error.message} />
    }

    return(
        <>
            { isFetching && <MoviesSkeleton /> }
            {/* { topRatedMovies.length === 0 && <p>No movies Found</p> } */}
            { topRatedMovies.length > 0 && isFetching === false && (
                <section className="py-5">
                    <div className="container-fluid px-3">
                        <h3 className="sec-title">Top Rated</h3>
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
                            { topRatedMovies.map((movie) => (
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
                            )) }
                        </Swiper>
                    </div>
                </section>
            ) }
        </>
    );
}
export default TopRated;