// import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Header';
 import PopularDestination from './components/PopularDestination/PopularDestination';
import ExploreGymSection from './components/ExploreGym/ExploreGymSection';
import PoplarGym from './components/PoplarGym/PoplarGym';
import Footer from './components/Footer/Footer';
import WhyChooseGym from './components/WhyChooseGym/WhyChooseGym';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularDestination />
      <ExploreGymSection />
      <PoplarGym/>
      <WhyChooseGym/>
      <Footer/>
    </>
  );
}

export default App;
