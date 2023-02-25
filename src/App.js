import { Route, Routes } from 'react-router-dom';
import CreateNewAccount from './components/Model/CreateNewAccount/CreateNewAccount';
import LoginModel from './components/Model/Login/LoginModel';
import LogInWithEmail from './components/Model/LogInWithEmail/LogInWithEmail';
import SignupWithEmailModel from './components/Model/SignupWithEmail/SignupWithEmailModel';
import ForgotPassword from './components/Model/ForgotPassword/ForgotPassword';
import HowItWorks from './components/Model/HowItWorks/HowItWorks';
import GymPage from './Pages/GymPage/GymPage';
import HomePage from './Pages/HomePage/HomePage'

import './App.css';
function App() {
  return (
    <>
      {/* routes start */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gym-page" element={<GymPage />} />
      </Routes>
      {/* routes End */}


      {/* Models Start */}
      <LoginModel />
      <SignupWithEmailModel />
      <CreateNewAccount />
      <LogInWithEmail />
      <ForgotPassword />
      <HowItWorks />
      {/* Models End */}
    </>
  );
}

export default App;
