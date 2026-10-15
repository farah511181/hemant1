import Hero from '../../components/home/Hero'
import AboutPreview from '../../components/home/AboutPreview'
import FeaturedWork from '../../components/home/FeaturedWork'
import FeaturedFilms from '../../components/home/FeaturedFilms'
import Statistics from '../../components/home/Statistics'
import Testimonials from '../../components/home/Testimonials'
import FinalCTA from '../../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedWork />
      <FeaturedFilms />
      <Statistics />
      <Testimonials />
      <FinalCTA />
    </>
  )
}