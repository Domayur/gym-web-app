import React from 'react'
import Maskgroupimg from '../assets/images/Maskgroup.png'
const GetReadyToBlinkFitness = () => {
    return (
        <>
            <div className='container text-center cst-dic-container'>
                <div className='mt-5 mb-5 '>
                    <img src={Maskgroupimg} class="img-fluid mb-2" />
                    <h3 className='text-black'>Get ready to book with Blink Fitness</h3>
                    <p>We ask everyone to confirm a few things before travelling or hosting.
                        You’ll only have to do this once.</p>
                    <div className=''>
                        <button className='btn cst-btn-load-more center'>Let’s do it</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GetReadyToBlinkFitness