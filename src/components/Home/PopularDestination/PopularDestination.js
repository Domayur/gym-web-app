import React from 'react'
import Image1 from '../../../assets/images/Rectangle-5.png'
import Image2 from '../../../assets/images/Rectangle-1.png'
import Image3 from '../../../assets/images/Rectangle-3.png'
import Image4 from '../../../assets/images/Rectangle-4.png'
import '../PopularDestination/PopularDestination.css'

const PopularDestination = () => {
    return (
        <>
            <section className='popular-destination'>
                <div class="container pt-4 pb-5 mb-4">
                    <h2 className='text-center pt-5'>Popular Destinations</h2>
                    <p className='text-center'>Discover the Most Popular Gyms Around the World</p>
                    <div class="row">
                        <div class="col-6 col-lg-3 col-md-4 col-sm-4">
                            <div class="card">
                                <img src={Image1} class="card-img-top" alt={Image1} />
                            </div>
                            <div class="card-block cst-body-card">
                                <h4 class="card-title">San Francisco</h4>
                                <p class="card-text">3120 gyms</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3 col-md-4 col-sm-4">
                            <div class="card">
                                <img src={Image2} class="card-img-top" alt={Image1} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">New York</h4>
                                <p class="card-text">6720 gyms</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3 col-md-4 col-sm-4">
                            <div class="card">
                                <img src={Image3} class="card-img-top" alt={Image1} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Los Angeles</h4>
                                <p class="card-text">5165 gyms</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3 col-md-4 col-sm-4">
                            <div class="card">
                                <img src={Image4} class="card-img-top" alt={Image1} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Washington</h4>
                                <p class="card-text">2112 gyms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularDestination