import React from 'react'
import GynRunImg from '../../../assets/images/gymRun.png'
import '../HowItWorks/HowItWorks.css'
const HowItWorks = () => {
    return (
        <>

            <div class="modal fade" id="HowItWorkModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h1 class="cst-new-account-head fs-5" id="exampleModalLabel">How it Works?</h1>
                                <div className='pb-3 pt-2'>
                                    <img src={GynRunImg} />
                                </div>
                                <div>
                                    <ol>
                                        <li className='para-model-how-it-work'>Log in to the gym booking service using your registered email and password.</li>
                                        <li className='para-model-how-it-work'> Click on the "Request to Book" button to view the available gym slots.</li>
                                        <li className='para-model-how-it-work'>Select the dates that you want to book the gym for.</li>
                                        <li className='para-model-how-it-work'>Confirm your booking by clicking on the "Request to Book" button.</li>
                                        <li className='para-model-how-it-work'>Pay for the booking if necessary.</li>
                                        <li className='para-model-how-it-work'>Receive a confirmation email and/or text message for your booking.</li>
                                        <li className='para-model-how-it-work'>Check in at the gym by showing your confirmation message (either on your phone or printed out) at the front desk when you arrive. </li>
                                        <li className='para-model-how-it-work'>Enjoy your workout session!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks