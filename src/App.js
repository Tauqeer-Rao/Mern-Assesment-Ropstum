import './App.css';
import Hero from './components/HeroSection';
import HomeBanner from './components/BannerAfterHero';
import RecoveryDeliveredSection from './components/RecoveryDelivered';
import Testimonials from './components/Testimonials';
import GetSameDayOnline from './components/GetSameDayOnline';
import FeaturedOn from './components/Featured';
import ServingState from './components/USMapState';
import FooterBanner from './components/FooterBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Hero />
      <HomeBanner />
      <RecoveryDeliveredSection />
      <Testimonials />
      <GetSameDayOnline />
      <FeaturedOn />
      <ServingState />
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
