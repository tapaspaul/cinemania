import MovieList from "@/components/movies/movies";
import HomeHero from '@/components/home/banner/banner';
import TopRated from "@/components/movies/top-rated";
import '@/components/home/home.css';

export default function Home() {
  return(
    <section className="home-content">
      <HomeHero />
      <TopRated></TopRated>
      <MovieList></MovieList>
    </section>
  );
}
