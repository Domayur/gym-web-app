// import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PopularDestination from './components/PopularDestination/PopularDestination';
import ExploreGymSection from './components/ExploreGym/ExploreGymSection';
import PoplarGym from './components/PoplarGym/PoplarGym';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularDestination />
      <ExploreGymSection />
      <PoplarGym/>
    </>
  );
}

export default App;
