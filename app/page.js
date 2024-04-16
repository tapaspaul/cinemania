import MovieList from "@/components/movies/movies";
import HomeHero from '@/components/home/banner/banner';
import '@/components/home/home.css';

export default function Home() {
  return(
    <section className="home-content">
      <HomeHero />
      <MovieList></MovieList>
    </section>
  );
}
