import MovieList from "@/components/movies/movies";
import HomeHero from '@/components/home/banner/banner';
import '@/components/home/home.css';
import TopRated from "@/components/movies/top-rated";

export default function Home() {
  return(
    <section className="home-content">
      <HomeHero />
      <TopRated></TopRated>
      <MovieList></MovieList>
    </section>
  );
}
