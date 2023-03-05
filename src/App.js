import { Route, Routes } from 'react-router-dom';
import CreateNewAccount from './components/Model/CreateNewAccount/CreateNewAccount';
import LoginModel from './components/Model/Login/LoginModel';
import LogInWithEmail from './components/Model/LogInWithEmail/LogInWithEmail';
import SignupWithEmailModel from './components/Model/SignupWithEmail/SignupWithEmailModel';
import ForgotPassword from './components/Model/ForgotPassword/ForgotPassword';
import HowItWorks from './components/Model/HowItWorks/HowItWorks';
import GymPage from './Pages/GymPage/GymPage';
import HomePage from './Pages/HomePage/HomePage'
import SearchResult from './Pages/SearchResult/SearchResult';
import './components/common.css'
import './App.css';
import SetAccount from './Pages/SetAccount/SetAccount';
import Payment from './Pages/Payment/Payment';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      {/* routes start */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gym-page" element={<GymPage />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/set-account" element={<SetAccount />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />

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
