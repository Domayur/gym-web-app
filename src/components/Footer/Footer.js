import React from 'react'

import FooterGymlogoImg from '../../assets/images/gymlogo.png'
import FacebookImg from '../../assets/images/facebook.png'
import InstagramImg from '../../assets/images/instagram.png'
import TwitterImg from '../../assets/images/twitter.png'
import YoutubeImg from '../../assets/images/youtube.png'
import LinkedinImg from '../../assets/images/linkedin.png'
import Image1Img from '../../assets/images/image1.png'


import '../Footer/Footer.css'
const Footer = () => {
    return (
        <>            
            <section className='footer-section add-height-class'>
                <div class="container-fluid footer">
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-sm-12 mb-4">
                                <img src={FooterGymlogoImg} alt="logo" />
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-3 col-6">
                                <p>Destination</p>
                                <ul>
                                    <li><a href="" alt="">San Francisco</a></li>
                                    <li><a href="" alt="">New York</a></li>
                                    <li><a href="" alt="">Los Angeles</a></li>
                                    <li><a href="" alt="">Washington</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6">
                                <p>Company</p>
                                <ul>
                                    <li><a href="" alt="">About Us</a></li>
                                    <li><a href="" alt="">Support Center</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6">
                                <p>Discover</p>
                                <ul>
                                    <li><a href="" alt="">Trust & Safety</a></li>
                                    <li><a href="" alt="">Terms & Privacy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-6">
                                <p>Support</p>
                                <ul>
                                    <li><a href="" alt="">Help Center</a></li>
                                    <li><a href="" alt="">Cancellation options</a></li>
                                    <li><a href="" alt="">Our COVID-19 Response</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-sm-flex justify-content-sm-between mb-5">
                            <div class="">
                                <a href="">
                                    <img class="social-icon" src={FacebookImg} alt="facebook" /></a>
                                <a href="">
                                    <img class="social-icon" src={InstagramImg} alt="instagram" /></a>
                                <a href="">
                                    <img class="social-icon" src={TwitterImg} alt="twitter" />

                                </a>
                                <a href="">
                                    <img class="social-icon" src={LinkedinImg} alt="linkedin" />
                                </a>
                                <a href="">
                                    <img class="social-icon" src={YoutubeImg} alt="youtube" />
                                </a>
                                <div class="d-block mt-3 store">
                                    <a href="">
                                        <img class="android-store" src={Image1Img} alt="facebook" />
                                    </a>
                                    <a href="">
                                        <img class="ios-store" src={Image1Img} alt="facebook" />
                                    </a>
                                </div>
                            </div>
                            <div class="">
                                <div class="store">
                                    <a href="">Terms of Service</a>
                                    <a href="">Privacy Police</a>
                                </div>
                            </div>
                        </div>
                        <div class="d-sm-flex justify-content-sm-between d-xs-block justify-content-xs-center">
                            <div class=""><p>© 2023 Gymguestpass</p></div>
                            <div class="store">
                                <a href="">Terms of Service</a>
                                <a href="">Privacy Police</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer