import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'

import RectangleB1 from '../../assets/images/Rectangle-b-5.png'
import { BsArrowBarRight, BsArrowRight, BsChatRight, BsCheckCircle, BsFillFileLock2Fill, BsLock, BsPaypal, BsStarFill } from 'react-icons/bs'
import PaymentComImg from '../../assets/images/Frame182.png'
import StripeImg from '../../assets/images/imagestripe.png'


import '../Payment/Payment.css'
const Payment = () => {
    return (
        <>
            <SubHeader />
            <section className='payment-section-cst pt-4 pb-4'>
                <div className='container mb-4'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8 ">
                                <div class="card mb-4  p-3">
                                    <h4 className='cst-revire-pay'>Review & Pay </h4>
                                    <hr />
                                    <tr>
                                        <td>
                                            <h4>Check in</h4>
                                            <p>01/10/2023</p>
                                        </td>
                                        <td> <p><BsArrowRight /></p></td>
                                        <td>
                                            <h4>Check out</h4>
                                            <p>01/10/2023</p>
                                        </td>
                                    </tr>
                                    <hr />
                                    <h4>Guests</h4>
                                    <p>1 Guest</p>
                                </div>

                                <div class="card mb-4 p-3">
                                    <h4 className='abut-this-heading'>Blink Fitness Rules</h4>
                                    <hr />
                                    <div>
                                        <ul>
                                            <li class="hard-class-algn gym-rule-section">
                                                <p><BsCheckCircle class="color-check-cls" /></p>
                                                <p class="cat-parat-for-gym-rule">Loud People are not allowed</p>
                                            </li>
                                            <li class="hard-class-algn gym-rule-section">
                                                <p><BsCheckCircle class="color-check-cls" /></p>
                                                <p class="cat-parat-for-gym-rule">No Smoking</p>
                                            </li>
                                            <li class="hard-class-algn gym-rule-section">
                                                <p> <BsCheckCircle class="color-check-cls" /></p>
                                                <p class="cat-parat-for-gym-rule">No Pets</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card mb-4 p-3">
                                    <h4 class="">Cancellation policy</h4>
                                    <p>Flexible</p>
                                    <p> Cancel up to 1 day prior to arrival and get a 100% refund</p>
                                </div>

                                <div class="card mb-4 p-3">
                                    <h4>Payment</h4>
                                    <hr />
                                    <button className='paypal-button'><BsPaypal />Pay with PayPal</button>
                                    <div className='d-flex mt-4 mb-4'>
                                        <hr width="40%" />
                                        <p className='p-1'>Or pay with a Card</p>
                                        <hr width="40%" />
                                    </div>
                                    <div class="">
                                        <form>
                                            <h4 class="">Card Information</h4>
                                            <div class="form-group">
                                                {/* <label for="inputAddress">Card Number</label> */}
                                                <input type="text" class="form-control inpu-field-cst" id="inputAddress" placeholder="4242 4242 4242 4242" />
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    {/* <label for="inputCity">City</label> */}
                                                    <input type="text" class="form-control inpu-field-cst" id="inputCity" placeholder="MM / YY" />
                                                </div>
                                                <div class="form-group col-md-4">
                                                    {/* <label for="inputState">State</label> */}
                                                    <input type="text" class="form-control inpu-field-cst" id="inputCity" placeholder="CVV" />
                                                </div>
                                                <div class="form-group col-md-2">
                                                    {/* <label for="inputZip">Zip</label> */}
                                                    <input type="text" class="form-control inpu-field-cst" id="inputZip" placeholder="0000" />
                                                </div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div class="form-group col-md-6">
                                                    <img src={PaymentComImg} className="img-fluid p-2 " />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="d-flex flex-row-reverse">
                                                        <div className="p-2"><img src={StripeImg} className="img-fluid" /></div>
                                                        <div className="pt-2"><p >Powered by </p></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group mt-1 d-flex flex-row-reverse">
                                                <button type="button" class="butn-for-pay form-control">Pay $363.28 <BsFillFileLock2Fill className='text-white float-end' /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4">

                                <div class="card mb-4 p-4">
                                    <img src={RectangleB1} />
                                    <div class="pt-3">
                                        <h4>Blink Fitness</h4>
                                        <p>16 E 4th St, New York, NY 10012, United States</p>
                                        <span><BsStarFill class="star-color-change" /> 4.8 (231)</span>
                                    </div>
                                </div>


                                <div class="card mb-4 p-4">
                                    <h4>Price Details</h4>
                                    <div class="collapse show" id="collapseCardExample">
                                        <hr />
                                        <div class="pt-3">
                                            <table>
                                                <tr>
                                                    <td><p>$343.77 x 1 month</p></td>
                                                    <td><p className='text-black float-end'>$343.77</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p>Cleaning fee</p></td>
                                                    <td><p className='text-black float-end'>$13.75</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p>Service fee</p></td>
                                                    <td><p className='text-black float-end'>$13.75</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p className='text-success'>19% monthly price discount</p></td>
                                                    <td><p className='text-success float-end'>$13.75</p></td>
                                                </tr>
                                            </table>
                                            <hr />

                                            <table>
                                                <tr>
                                                    <td><p className='text-black'>Total</p></td>
                                                    <td><p className='text-black float-end'>$363.28</p></td>
                                                </tr>
                                            </table>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Payment