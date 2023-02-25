import React from 'react'
import RectangleB1 from '../assets/images/Rectangle-b-5.png'
import RectangleB2 from '../assets/images/Rectangle-b-1.png'
import RectangleB3 from '../assets/images/Rectangle-5-b-2.png'
import RectangleB4 from '../assets/images/Rectangle-5-b-3.png'
import { BsStarFill } from 'react-icons/bs'


const SimilarGyms = () => {
    return (
        <>
            <section class="similar-gym-section add-height0-gym-set">
                <div class="container">
                    <h2>Similar Gyms</h2>
                    <p>These popular gyms have a lot to offer</p>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col-6 col-lg-3 col-md-4">
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
                        <div class="col-6 col-lg-3 col-md-4">
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
                        <div class="col-6 col-lg-3 col-md-4">
                            <div class="card">
                                <img src={RectangleB3} class="card-img-top" alt={RectangleB3} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Peloton Studios</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3 col-md-4">
                            <div class="card">
                                <img src={RectangleB4} class="card-img-top" alt={RectangleB4} />
                            </div>
                            <div class="card-block">
                                <h4 class="card-title">Equinox</h4>
                                <p class="card-text">12 miles away</p>
                                <span><BsStarFill class="star-color-change" /> 4.8 (231) .</span>
                                <span> Starting from </span><b>$24</b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SimilarGyms