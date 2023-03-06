import React from 'react'

const AddPayPalAsPaymentMethod = () => {
    return (
        <>
            <div class="modal fade" id="AddPayPalAsPaymentModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h6>Add PayPal as Payment Method</h6>
                                <p className=''>On this page, you can connect your PayPal account to your user profile as a payment method</p>

                                <label>Important</label>
                                <p>Please enter the email address associated with your PayPal account.</p>

                                <form className='row g-3'>
                                    <div className='col-12'>
                                        <input type="email" class="form-control extra-cls-for-height" id="email" placeholder="martinjefferson@gmail.com" />
                                    </div>
                                    
                                    <div class="col-12">
                                        <button type="button" class="text-center form-control button-csr-sinin"  data-bs-toggle="modal" data-bs-target="#AddBankAccountAsPaymentMethod2Model">Submit</button>
                                    </div>
                                    <div class="col-12 text-center">
                                        <a href="#" class="text-primary text-center"style={{"display": "block", "text-decoration-line": 'underline'}}>All Payment Methods</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPayPalAsPaymentMethod