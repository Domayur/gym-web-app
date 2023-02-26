import React from 'react'
import '../LogInWithEmail/LogInWithEmail.css'
const LogInWithEmail = () => {
    return (
        <>
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='container'>
                                <h1 class="modal-title extra-class-model fs-5" id="exampleModalLabel">Login in with email</h1>
                                <p className='cst-heading-para-model'>Enter the email address associated with your account</p>
                                <form class="row g-3">

                                    <div class="col-12">
                                        <input type="email" class="form-control extra-cls-for-height" id="inputAddress" placeholder="martinjefferson@gmail.com" value=""/>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Password" />
                                    </div>
                                    <p><a href='#' className='text-primary' style={{ "text-decoration-line": "underline", "float": "right" }} data-bs-toggle="modal" data-bs-target="#forgotPasswordModel">Forgot Password</a></p>

                                    <div class="col-12">
                                        <button type="submit" class="text-center form-control button-csr-sinin">Log in</button>
                                    </div>

                                    <div class="col-12">
                                        <a href='#' class="text-primary text-center" style={{ "display": "block", "text-decoration-line": "underline" }} >All Log in Options</a>
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

export default LogInWithEmail