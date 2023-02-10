import React from 'react'
import BestPriceImg from '../../assets/images/Best-Price.png'
import Support247Img from '../../assets/images/Support247.png'
import SecurityPaymentImg from '../../assets/images/Security-Payment.png'
import MoneyBackImg from '../../assets/images/Money-Back.png'
import '../WhyChooseGym/WhyChooseGym.css'

const WhyChooseGym = () => {
    return (
        <>
            <section className='why-gym-pass' style={{ "background-color": "#F9FAFD", "padding": "16px 0px 40px" }}>
                <div class="container " style={{ "background": "white", "border": "1px" }}>
                    <div class="row text-center" style={{ "padding": "12px" }}>
                        <h3 className='mt-5' style={{"color" :"#151927","font-weight": "500" ,"font-size": "32px","line-height": "140%"}}>Why Choose Gym Guest Pass</h3>
                        <p>Here are the benefits you can get from us</p>
                        <div class="col-md-3 col-sm-6 col-xs-6 justify-content-center my-5">
                            <img src={BestPriceImg} alt="Best Price" className="mb-4" />
                            <h5>Best Price</h5>
                            <p className='para-why-chose-gym text-center'>Commitment to the lowest prices in the market and is accompanied by other special offers</p>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-6 justify-content-center my-5">
                            <img src={Support247Img} alt="Support 24/7" className="mb-4" />
                            <h5>Support 24/7</h5>
                            <p className='para-why-chose-gym text-center'>Free consultation calls from 1900-5325, including 1am.</p>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-6 justify-content-center my-5">
                            <img src={SecurityPaymentImg} alt="Security Payment" className="mb-4" />
                            <h5>Security Payment</h5>
                            <p className='para-why-chose-gym text-center'>Easy to payment and security for any your payment at Gym Guest Pass.</p>
                        </div>
                        <div class="col-md-3 col-sm-6 col-xs-6 justify-content-center my-5">
                            <img src={MoneyBackImg} alt="Money Back" className="mb-4" />
                            <h5>Money Back</h5>
                            <p className='para-why-chose-gym text-center'>Commit to refund 100% of the money to you if there are any problems at Gym Guest Pass.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseGym
