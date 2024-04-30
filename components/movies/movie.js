import { useState } from 'react';
import { MdOutlinePlaylistAdd, MdOutlinePlaylistAddCheck } from 'react-icons/md';
import classes from './movies.module.css';
import Link from 'next/link';
import { addToWatchlist } from './add-to-watchlist';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

export default function Movie({ movie }){
    const [watchList, setWatchList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);
    const [ error, setError ] = useState(null);
    const handleWatchlist = async (movieId) => {
        setLoading(true);
        try{
            const responseData = await addToWatchlist(movieId);
            setWatchList([ ...watchList, responseData ]);
            setAdded(true);
        }catch (error){
            setError({message: error.message || 'Not able to add movie to the watchlist, Please try again later.'});
        }
        setLoading(false);
    }
    return(
        <div className={ `${ classes['movie-content'] } position-relative overflow-hidden` }>
            <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} alt={movie.title} className="img-fluid transition-6" />
            <div className={`${ classes.desc } px-3 pb-3 position-absolute start-0 end-0 bottom-0 transition-4`}>
                <h4 className={ classes.title }>
                    <Link href={`/movies/${ movie.id }`} className="text-white">{ movie.title }</Link>
                </h4>
                <p className={ classes.date }>{ formatDate( movie.release_date) }</p>
                <button onClick={() => handleWatchlist(movie.id)} type="button" className={`bg-transparent ${ added ? 'text-success' : 'text-primary'} p-0 d-flex align-items-center gap-2 w-100 mt-3 border-0`}>
                    {loading ? (
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        added ? <MdOutlinePlaylistAddCheck className="d-block" /> : <MdOutlinePlaylistAdd className="d-block" />
                    )}
                    <span className="d-block">{ added ? 'Added to Watchlist' : 'Add to Watchlist' }</span>
                </button>
            </div>
        </div>
    );
}