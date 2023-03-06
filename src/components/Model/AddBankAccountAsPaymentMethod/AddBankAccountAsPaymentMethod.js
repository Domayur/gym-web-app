import React from 'react'

const AddBankAccountAsPaymentMethod = () => {
    return (
        <>
            <div class="modal fade" id="PaymentModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h6 class="" id="exampleModalLabel">Add Bank Account as Payment Method</h6>
                                <p className=''>On this page, you can connect your bank account to your user profile as a payment method.</p>
                                <form class="row g-3">
                                    <div class="col-12">
                                        <select name="cars" id="cars" class="form-control extra-cls-for-height form-select">
                                            <option value="USA" selected>USA</option>
                                            <option value="INDIA">INDIA</option>
                                        </select>
                                    </div>

                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress" placeholder="Address Line 1" />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Address Line 2" />
                                    </div>
                                    <div class="col-md-6">
                                        <select name="cars" id="cars" class="form-control extra-cls-for-height form-select">
                                            <option value="City" selected>City</option>
                                            <option value="USA" >USA</option>
                                            <option value="INDIA">INDIA</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputPassword4" placeholder='State / Province' />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Zip Code" />
                                    </div>

                                    <div class="col-12">
                                        <button type="button" class="text-center form-control button-csr-sinin"  data-bs-toggle="modal" data-bs-target="#AddPaymentMethodModel">Next</button>
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

export default AddBankAccountAsPaymentMethod