import React from 'react'
import '../AddaPaymentMethod/AddaPaymentMethod.css'
const AddaPaymentMethod = () => {
    return (
        <>
            <div class="modal fade" id="AddPaymentMethodModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Payment Method</h1>
                                <p className=''>On this page, you can add a payment method to your account. This will allow you to make transactions and bookings on our platform.</p>
                                     <div className='card extra-claa-for-effact p-4'>
                                        <h1 class="modal-title fs-5">Paypal</h1>
                                        <p>Connect your existing PayPal account</p>
                                        <div className='row'>
                                            <div className='col-sm-3'>
                                                <button className='model-button-doller'>$ USD</button>
                                            </div>
                                            <div className='col-sm-9'>
                                                <lable class="lable-extra-ama">Processed in</lable>
                                                <p className='p-hours-class'>3-4 hours</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className='card extra-claa-for-effact p-4'>
                                        <h1 class="modal-title fs-5">Bank Account</h1>
                                        <p>Add your bank details</p>
                                        <div className='row'>
                                            <div className='col-sm-3'>
                                                <button className='model-button-doller'>$ USD</button>
                                            </div>
                                            <div className='col-sm-9'>
                                                <lable class="lable-extra-ama">Processed in</lable>
                                                <p className='p-hours-class'>5-6 business days</p>
                                            </div>
                                        </div>
                                    </div><br />
 
                                <div class="col-12">
                                    <button type="button" class="text-center form-control button-csr-sinin" data-bs-toggle="modal" data-bs-target="#AddPayPalAsPaymentModel">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddaPaymentMethod