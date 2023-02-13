import React from 'react'
import Rectangle23 from '../../assets/images/Rectangle-23.png'
import Rectangle18 from '../../assets/images/Rectangle-18.png'


import '../PoplarGym/PoplarGym.css';
import IconRight from '../../assets/images/iconRight.png'

const PoplarGym = () => {
    return (
        <>
            <section className='popular-gym-section'>
                <div className='half-color-class'>
                    <div className="container">
                        <div className='row pt-5 pb-4'>
                            <div className='col-sm-6'>
                                <h2 className='expore-gym-class-heading'>Explore Gyms</h2>
                                <p className='expore-gym-class-para'>These popular gyms have a lot to offer</p>
                            </div>
                            <div className='col-sm-6 float-right pt-5 extra-space-class'>
                                <button class="btn btn-see-more" type="button">See More  &nbsp;<span> <img src={IconRight} /></span></button>
                            </div>
                        </div>

                        <div className='row setclassfor-position'>
                            <div className='col-sm-6 mb-4 left-image'>
                                <img src={Rectangle18} className="card-img-top" />
                                <div className='first-div'>
                                    <h3 className='text-white para-heading3-left-image'>Save more with Yearly subscription</h3>
                                    <p className='text-white para-heading-left-image'>Up to 30% discount</p>
                                    <button class="btn newimage-button">Explore</button>
                                </div>
                            </div>
                            <div className='col-sm-6 mb-4 right-image'>
                                <img src={Rectangle23} className="card-img-top right-image " />
                                <div className='second-div'>
                                    <h3 className='text-white para-heading3-right-image'>New year, new adventures</h3>
                                    <p className='text-white para-heading-right-image'>Get 15% off stays worldwide</p>
                                    <button class="btn newimage-button">Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PoplarGym