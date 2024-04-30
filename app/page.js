import HomeHero from '@/components/home/banner/banner';
import '@/components/home/home.css';
import Upcoming from "@/components/movies/upcoming";
import TopRated from "@/components/movies/top-rated";
import NowPlaying from '@/components/movies/now-playing';

export default function Home() {
  return(
    <section className="home-content">
      <HomeHero />
      <Upcoming />
      <TopRated />
      <NowPlaying />
    </section>
  );
}
