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
import AddBankAccountAsPaymentMethod from './components/Model/AddBankAccountAsPaymentMethod/AddBankAccountAsPaymentMethod';
import AddaPaymentMethod from './components/Model/AddaPaymentMethod/AddaPaymentMethod';
import AddPayPalAsPaymentMethod from './components/Model/AddPayPalAsPaymentMethod/AddPayPalAsPaymentMethod';
import AddBankAccountAsPaymentMethod2 from './components/Model/AddBankAccountAsPaymentMethod2/AddBankAccountAsPaymentMethod2';
import DashboardPayment from './Pages/DashboardPayment/DashboardPayment';
import DashbordSecurity from './Pages/DashbordSecurity/DashbordSecurity';
import { DashbordWishlist } from './Pages/DashbordWishlist/DashbordWishlist';
import DashbordGuestPass from './Pages/DashbordGuestPass/DashbordGuestPass';
import DashboardProfile from './Pages/DashboardProfile/DashboardProfile';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';

function App() {
  return (
    <>
      {/* routes start */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gym-page" element={<GymPage />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/set-account" element={<SetAccount />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-payment" element={<DashboardPayment />} />
        <Route path="/dashboard-security" element={<DashbordSecurity/>} />
        <Route path="/dashboard-wishlist" element={<DashbordWishlist/>} />
        <Route path="/dashboard-guestpass" element={<DashbordGuestPass/>} />
        <Route path="/dashboard-profile" element={<DashboardProfile/>} />
                
      </Routes>
      {/* routes End */}


      {/* Models Start */}
      <LoginModel />
      <SignupWithEmailModel />
      <CreateNewAccount />
      <LogInWithEmail />
      <ForgotPassword />
      <HowItWorks />
      <AddBankAccountAsPaymentMethod />
      <AddaPaymentMethod />
      <AddPayPalAsPaymentMethod />
      <AddBankAccountAsPaymentMethod2 />
      {/* Models End */}
    </>
  );
}

export default App;
