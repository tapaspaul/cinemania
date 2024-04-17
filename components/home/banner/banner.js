import bannerBg from '@/assets/img/home-banner.jpg';
import Link from 'next/link';

export default function HomeHero(){
    return(
        <section style={{ backgroundImage: `url( ${ bannerBg.src } )` }} className="home-banner text-center bg-cover bg-no-repeat bg-center">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <h1>Welcome to <span className="text-primary">CineMania</span></h1>
                        <p>Discover the cinematic universe at your fingertips with our app powered by the TMDB API. From trending blockbusters to timeless classics, explore comprehensive movie data including ratings, reviews, trailers, and more. Immerse yourself in the magic of film with personalized recommendations and seamless browsing. Lights, camera, action - your movie journey starts here!</p>
                        <Link href="#" className="btn btn-primary mt-5">Explore More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}