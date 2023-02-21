import React from 'react'

const SignupWithEmailModel = () => {
    return (
        <>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Launch demo modal
            </button> */}

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Sign up with email</h1>
                                <p className='cst-heading-para-model'>Enter your email address to create an account.</p>
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputEmail4" placeholder='First Name' />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputPassword4" placeholder='Last Name' />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress" placeholder="martinjefferson@gmail.com" />
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Password" />
                                    </div>

                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Confirm Password" />
                                    </div>

                                    <div class="col-12">
                                        <button type="submit" class="text-center form-control button-csr-sinin">Sign in</button>
                                    </div>

                                    <div class="col-12">
                                        <a href='#' class="text-primary text-center" style={{ "display": "block", "text-decoration-line": "underline" }}>All Log in Options</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <p className='text-center cst-footer-text'>Don’t have an account? <a href='#' className='text-primary'>Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupWithEmailModel