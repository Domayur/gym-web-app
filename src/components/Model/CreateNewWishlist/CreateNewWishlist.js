import React from 'react'

const CreateNewWishlist = () => {
    return (
        <>
            <div class="modal fade" id="CreateNewWishlistModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h6>Create New Wishlist</h6>
                                <p className=''>The transaction page filter allows you to customize the list of transactions displayed.</p>

                                <form className='row g-3'>
                                    <div className='col-12'>
                                        <input type="text" class="form-control extra-cls-for-height" id="Name" placeholder="Name" />
                                    </div>

                                    <div class="col-12">
                                        <button type="button" class="text-center form-control button-csr-sinin" data-bs-toggle="modal" data-bs-target="#AddBankAccountAsPaymentMethod2Model">Create</button>
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

export default CreateNewWishlist