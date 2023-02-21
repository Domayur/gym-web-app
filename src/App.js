
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection/HeroSection';
import ExploreGymSection from './components/Home/ExploreGym/ExploreGymSection';
import PoplarGym from './components/Home/PoplarGym/PoplarGym';
import WhyChooseGym from './components/Home/WhyChooseGym/WhyChooseGym';
import PopularDestination from './components/Home/PopularDestination/PopularDestination';
import Footer from './components/Footer/Footer';
import './App.css';
import CreateNewAccount from './components/Model/CreateNewAccount/CreateNewAccount';
import LoginModel from './components/Model/Login/LoginModel';
import LogInWithEmail from './components/Model/LogInWithEmail/LogInWithEmail';
import SignupWithEmailModel from './components/Model/SignupWithEmail/SignupWithEmailModel';
import ForgotPassword from './components/Model/ForgotPassword/ForgotPassword';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularDestination />
      <ExploreGymSection />
      <PoplarGym />
      <WhyChooseGym />
      <Footer />

      {/* Models Start */}
      <LoginModel />
      <SignupWithEmailModel />
      <CreateNewAccount />
      <LogInWithEmail />
      <ForgotPassword/>
      {/* Models End */}
    </>
  );
}

export default App;
