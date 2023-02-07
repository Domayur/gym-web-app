// import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PopularDestination from './components/PopularDestination/PopularDestination';
import ExploreGymSection from './components/ExploreGym/ExploreGymSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularDestination />
      <ExploreGymSection />
    </>
  );
}

export default App;
