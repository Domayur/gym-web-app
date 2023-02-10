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

                        <div className='row'>
                            <div className='col-sm-6 mb-4'>
                                <img src={Rectangle18} className="card-img-top" />
                            </div>
                            <div className='col-sm-6'>
                                <img src={Rectangle23} className="card-img-top " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PoplarGym