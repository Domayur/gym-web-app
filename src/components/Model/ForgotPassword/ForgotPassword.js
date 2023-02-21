import React from 'react'
import '../ForgotPassword/ForgotPassword.css'

const ForgotPassword = () => {
    return (
        <>
            <div class="modal fade" id="forgotPasswordModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h1 class="modal-title-forgot-password fs-5" id="exampleModalLabel">Forgot Password</h1>
                                <p className='model-forgot-password'>Enter the email address associated with your account, and we’ll email you a link to reset your password</p>
                                <form class="row g-3">
                                    <div class="col-12">
                                        <input type="email" class="form-control extra-cls-for-height" id="inputAddress" placeholder="martinjefferson@gmail.com" />
                                    </div>

                                    <div class="col-12">
                                        <button type="submit" class="text-center form-control button-csr-sinin">Send Reset Link</button>
                                    </div>

                                    <div class="col-12">
                                        <p class="text-center" style={{"text-decoration-line": "underline"}}>Back to <a href='#' className='text-primary'>Log in</a></p>
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

export default ForgotPassword