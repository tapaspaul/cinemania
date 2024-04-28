import { MdVisibility } from 'react-icons/md';
import classes from './movies.module.css';
import Link from 'next/link';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

export default function Movie({ movie }){
    return(
        <div className={ `${ classes['movie-content'] } position-relative overflow-hidden` }>
            <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} alt={movie.title} className="img-fluid transition-6" />
            <div className={`${ classes.desc } px-3 pb-3 position-absolute start-0 end-0 bottom-0 transition-4`}>
                <h4 className={ classes.title }>
                    <Link href={`/movies/${ movie.id }`} className="text-white">{ movie.title }</Link>
                </h4>
                <p className={ classes.date }>{ formatDate( movie.release_date) }</p>
                <button type="button" className="btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-2 w-100 mt-3">
                    <MdVisibility className="d-block" />
                    <span>Add to Watchlist</span>
                </button>
            </div>
        </div>
    );
}