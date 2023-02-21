import React from 'react'
import { BsFacebook, BsFillEnvelopeFill, BsGoogle, } from 'react-icons/bs'

const LoginModel = () => {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Welcome Back</h1> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h1 class="  fs-5 heading-welcome-model" id="exampleModalLabel">Welcome Back</h1>
                            <p className='cst-heading-para-model'>Securely Log in to Manage Your Bookings and Profile</p>
                            <div className='container'>
                                <div className='row  back-col-cst'>
                                    <div className='col'>
                                        <p className='text-center inner-para-cst'><BsGoogle /> Log in with Google</p>
                                    </div>
                                </div><br />
                                <div className='row  back-col-cst'>
                                    <div className='col  '>
                                        <p className='text-center inner-para-cst'><BsFacebook /> Log in with Facebook</p>
                                    </div>
                                </div><br />
                                <div className='row  back-col-cst'>
                                    <div className='col'>
                                        <p className='text-center inner-para-cst' data-bs-toggle="modal" data-bs-target="#exampleModal3"><BsFillEnvelopeFill /> Log in with Email</p>
                                    </div>
                                </div><br />
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

export default LoginModel