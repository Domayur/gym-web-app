import React from 'react'

const AddBankAccountAsPaymentMethod2 = () => {
  return (
    <>
    <div class="modal fade" id="AddBankAccountAsPaymentMethod2Model" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <option value="Individual" selected>Individual</option>
                                            <option value="INDIA">INDIA</option>
                                        </select>
                                    </div>

                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress" placeholder="Account holder first name" />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Account holder last name" />
                                    </div>
                                    
                                   
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Account Number" />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="ConfirmAccount Number" />
                                    </div>

                                    <div class="col-12">
                                        <button type="button" class="text-center form-control button-csr-sinin"  >Submit</button>
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

export default AddBankAccountAsPaymentMethod2