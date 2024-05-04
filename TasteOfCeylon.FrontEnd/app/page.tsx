import HeroSection from './(home)/HeroSection/HeroSection'
import PopularCategories from './(home)/PopularCategories/PopularCategories'
import TodayOffers from './(home)/TodayOffers/TodayOffers'
import CustomerFeedback from './(home)/CustomerFeedback/CustomerFeedback'
import OurServices from './(home)/OurServices/OurServices'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between scroll-smooth">
      <HeroSection />
      <PopularCategories />
      <TodayOffers />
      <CustomerFeedback />
      <OurServices />
    </main>
  );
}
