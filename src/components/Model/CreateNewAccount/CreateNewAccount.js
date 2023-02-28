import React from 'react'
import GoogleImg from '../../../assets/images/GoogleOriginal.png'
import FacebookImg from '../../../assets/images/FacVector.png'
import MessaegImg from '../../../assets/images/messageicon.png'
import '../CreateNewAccount/CreateNewAccount.css'

const CreateNewAccount = () => {
    return (
        <>
            <div class="modal fade" id="exampleModalCreateNewAccount" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Welcome Back</h1> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h1 class="cst-new-account-head fs-5" id="exampleModalLabel">Create a New Account</h1>
                            <p className='para-model-for-new-account'>Sign up to access exclusive features and content on Gym Guest Pass</p>
                            <div className='container'>
                                <div className='row  back-col-cst'>
                                    <div className='col'>
                                        <p className='text-center inner-para-cst' ><img src={GoogleImg} /> Sign up with Google</p>
                                    </div>
                                </div><br />
                                <div className='row  back-col-cst'>
                                    <div className='col  '>
                                        <p className='text-center inner-para-cst'><img src={FacebookImg} />  Sign up with Facebook</p>
                                    </div>
                                </div><br />
                                <div className='row  back-col-cst'>
                                    <div className='col'>
                                        <p className='text-center inner-para-cst' data-bs-toggle="modal" data-bs-target="#exampleModal2"><img src={MessaegImg} /> Sign up with Email</p>
                                    </div>
                                </div><br />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <p className='text-center cst-footer-text'>Already have an account? <a href='#' className='text-primary'>Log In</a></p>
                            <p className='text-center'>Click “Sign Up” to agree to our  <a href='#' className='text-primary'>Terms of Service and Privacy Policy</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNewAccount