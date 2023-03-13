import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavLogo from '../../assets/images/BrandLogo.png'
import Abot1Img from '../../assets/images/Rectangle61.png'
import Abot2Img from '../../assets/images/Rectangle62.png'



import '../AboutUsPage/AboutUsPage.css'
const AboutUsPage = () => {
  return (
    <>
      <Header />
      <section class='about-us-section'>
        <div class="container">
          <div className='text-center extra-class-for-padding pt-5'>
            <p style={{ "color": "#4B58CE" }}>About Us</p>
            <h1 className='heading-about-us text-center'>Achieve your fitness goals with ease</h1>
            <p className=''>Our gym booking app makes it easy for fitness
              enthusiasts to find and book gym sessions at their
              convenience. With just a few taps, users can discover new gyms,
              view class schedules, and reserve their spot. Join millions of
              users worldwide and start achieving your health and wellness goals today.</p>
          </div>
        </div>
      </section>

      <section class='about-us-section-second mt-5 mb-5'>
        <div class="container">
          <div className='text-center'>
            <img class="img-fluid" src={NavLogo} />
            <p className='pt-4 pb-4'>Our gym booking app is designed to make it easier for fitness enthusiasts to find and book gym sessions at their convenience. With our app, users can discover new gyms in their area, view class schedules, and reserve a spot in a class or session with just a few taps. We believe that everyone should have access to affordable and convenient fitness options, and our app is designed to help users achieve their health and wellness goals. Whether you're a beginner or a seasoned pro, our app has something for everyone, from yoga and Pilates to weightlifting and cardio.</p>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <img class="img-fluid" src={Abot1Img} />
            </div>
            <div className='col-md-6 pt-5'>
              <h2>About Us</h2>
              <p>Our gym booking app is designed to make it easier for fitness enthusiasts to find and book gym sessions at their convenience. With our app, users can discover new gyms in their area, view class schedules, and reserve a spot in a class or session with just a few taps. We believe that everyone should have access to affordable and convenient fitness options, and our app is designed to help users achieve their health and wellness goals. Whether you're a beginner or a seasoned pro, our app has something for everyone, from yoga and Pilates to weightlifting and cardio.</p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-6 pt-5'>
              <h2>About Us</h2>
              <p>Our gym booking app is designed to make it easier for fitness enthusiasts to find and book gym sessions at their convenience. With our app, users can discover new gyms in their area, view class schedules, and reserve a spot in a class or session with just a few taps. We believe that everyone should have access to affordable and convenient fitness options, and our app is designed to help users achieve their health and wellness goals. Whether you're a beginner or a seasoned pro, our app has something for everyone, from yoga and Pilates to weightlifting and cardio.</p>
            </div>
            <div className='col-md-6'>
              <img class="img-fluid" src={Abot2Img} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUsPage