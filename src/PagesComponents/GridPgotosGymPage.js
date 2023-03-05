import React from 'react'
import Image1 from '../assets/images/Rectangle-110.png'
import Image2 from '../assets/images/Rectangle-111.png'
import Image3 from '../assets/images/Rectangle-112.png'
import Image4 from '../assets/images/Rectangle-113.png'
import ImageBig from '../assets/images/Rectangle-109.png'

const GridPgotosGymPage = () => {
    return (
        <>
            <section class='gympage show-all-photos pt-4'>
                <div class="container">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img src={ImageBig} class="card-img-top" />
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col"> <img src={Image1} class="card-img-top" />  </div>
                                <div class="col"> <img src={Image2} class="card-img-top" />  </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col"> <img src={Image3} class="card-img-top" /> </div>
                                <div class="col"> <img src={Image4} class="card-img-top" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section >
        </>
    )
}

export default GridPgotosGymPage