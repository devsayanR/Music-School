import FeaturedCourses from "@/components/FeaturedCourses"
import Hero from "@/components/Hero"
import Instructors from "@/components/Instructors"
import TestimonalCards from "@/components/TestimonalCards"
import UpcomingWebnier from "@/components/UpcomingWebnier"
import WhyChooseUs from "@/components/WhyChooseUs"

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonalCards />
      <UpcomingWebnier />
      <Instructors />
    </main>
  )
}

export default Home