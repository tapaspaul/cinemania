import bannerBg from '@/assets/img/home-banner.jpg';
import Link from 'next/link';

export default function HomeHero(){
    return(
        <section style={{ backgroundImage: `url( ${ bannerBg.src } )` }} className="home-banner bg-cover bg-no-repeat bg-center">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h1>Welcome to <span className="text-primary">TMDB</span></h1>
                <Link href={'javascript: void(0);'} className="btn btn-primary">Explore More</Link>
            </div>
        </section>
    );
}