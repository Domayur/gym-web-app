import React from 'react'
import '../ExploreGym/ExploreGymSection.css'
import RectangleB1 from '../../assets/images/Rectangle-b-5.png'
import RectangleB2 from '../../assets/images/Rectangle-b-1.png'
import RectangleB3 from '../../assets/images/Rectangle-5-b-2.png'
import RectangleB4 from '../../assets/images/Rectangle-5-b-3.png'
import RectangleB5 from '../../assets/images/Rectangle-b5.png'
import RectangleB6 from '../../assets/images/Rectangleb6.png'
import RectangleB7 from '../../assets/images/Rectangle-b7.png'
import RectangleB8 from '../../assets/images/Rectangle8.png'



import { BsStarFill } from 'react-icons/bs'
const ExploreGymSection = () => {
    return (
        <>
            <section class='explore-gym-section pt-4 pb-5 mb-4'>
                <div class="container">
                    <h1 className='pt-5'><b>Explore Gyms</b></h1>
                    <p className=''>These popular gyms have a lot to offer</p>

                    <button className='btn cst-btn-explor-gym mb-3 m-1'>All</button>
                    <button className='btn cst-btn-explor-gym mb-3 m-1'>Featured</button>
                    <button className='btn cst-btn-explor-gym active mb-3 m-1'>Best Rate</button>
                    <button className='btn cst-btn-explor-gym mb-3 m-1'>Most View</button>
                    <button className='btn cst-btn-explor-gym mb-3 m-1'>Popular</button>
 

                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB1} class="card-img-top" alt={RectangleB1} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span class="float-right"> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB2} class="card-img-top" alt={RectangleB2} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB3} class="card-img-top" alt={RectangleB3} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB4} class="card-img-top" alt={RectangleB4} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB5} class="card-img-top" alt={RectangleB5} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB6} class="card-img-top" alt={RectangleB6} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB7} class="card-img-top" alt={RectangleB7} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={RectangleB8} class="card-img-top" alt={RectangleB8} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Blink Fitness</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                    </div>
                    <div class="text-center pt-5">
                        <button className='btn cst-btn-load-more center'>Load More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreGymSection