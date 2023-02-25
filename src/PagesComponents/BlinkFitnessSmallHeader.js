import React from 'react'
import Rectangle114Img from '../assets/images/Rectangle-114.png';
import UplodandHeartImg from '../assets/images/Group-406.png';

const BlinkFitnessSmallHeader = () => {
    return (
        <>
            <section style={{ "background": "#f9fafd" }} class="pt-5">
                <div class="container">
                    <div class="container">
                        <div class="row innerdiv-header">
                            <div class="col-sm-1">
                                <img src={Rectangle114Img} />
                            </div>
                            <div class="col">
                                <label>Blink Fitness</label>
                                <p>New York, USA</p>
                            </div>
                            <div class="col-sm-1">
                                <img src={UplodandHeartImg} class="card-brn-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlinkFitnessSmallHeader