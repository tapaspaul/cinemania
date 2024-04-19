'use client';
import { useState, useEffect } from "react";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Movie from "./movie";
import MoviesSkeleton from "./movies-skeleton";
import MovieError from "./movie-error";

const API_KEY = process.env.TMDB_API_KEY;

export default function NowPlaying(){
    const [ nowPlayingMovies, setNowPlayingMovies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState();
    useEffect(() => {
        async function fetchNowPlayingMovies(){
            setIsLoading(true);
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ API_KEY }`);
                const responseData = await response.json();
                if(!response.ok) throw new Error('Failed to Fetch Movies');
                setNowPlayingMovies( responseData.results || [] );
            }catch(error){
                setError({message: error.message || 'Could not find Movies, Please try again later.'});
            }            
            setIsLoading(false);
        }
        fetchNowPlayingMovies();
        console.log(nowPlayingMovies);
    }, []);
    if(error){
        return <MovieError title="An Error Occured!" message={error.message} />
    }
    return(
        <>
            { isLoading && <MoviesSkeleton /> }
            { nowPlayingMovies.length === 0 && <p>No movies Found</p> }
            { nowPlayingMovies.length > 0 && isLoading === false && (
                <section className="py-5">
                    <div className="container-fluid px-3">
                        <h3 className="sec-title">Now Playing Movies</h3>
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
                            { nowPlayingMovies.map((movie) => (
                                <SwiperSlide key={ movie.id }>
                                    <Movie movie={ movie } />
                                </SwiperSlide>
                            )) }
                        </Swiper>
                    </div>
                </section>
            ) }    
        </>
    );
}