import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import WishlistImg from '../../assets/images/wishlistimg.png'
import GuestpassImg from '../../assets/images/guestpassicon.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import { BiLocationPlus } from "react-icons/bi";
import ProfileIconImg from '../../assets/images/blueprofileicon.png'



const DashboardProfile = () => {
    const [flag, setflag] = useState(false)
    const handlePersoanle = () => {
        setflag(false)
    }

    const handleVerification=()=>{
        setflag(true)
    }
    return (
        <>
            <SubHeader />
            <section className='payment-section-cst pt-4 pb-4'>
                <div className='container mb-4'>
                    <div class="container-fluid">
                        <div class="row">
                            <DashbordSidebar />

                            <div class="col-md-7 col-lg-8 col-xl-9 ">
                                <div class="card mb-4  p-3">
                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <img src={ProfileIconImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-11'>
                                            <h4 className='dashboard-heading4 pt-2'> Profile</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4  p-3">
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <p style={{"cursor":"pointer"}} onClick={handlePersoanle}>Personal Details</p>
                                        </div>
                                        <div className='col-md-2'>
                                            <p style={{"cursor":"pointer"}} onClick={handleVerification}>Verification</p>
                                        </div>
                                    </div>
                                </div>
                                {flag === false && <>

                                    <div class="card mb-4 p-3">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h4>Personal Details</h4>
                                                <p>Make sure your personal details is accurate</p>
                                            </div>
                                            <div className='col-md-6'>
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
                                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="Washington DC" />
                                                    </div>

                                                    <div class="col-12">
                                                        <input type="text" class="form-control extra-cls-for-height" id="inputAddress2" placeholder="English" />
                                                    </div>

                                                    <div class="col-12">
                                                        <button type="submit" class="text-center form-control button-csr-sinin">Update</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </>}

                                {flag && <>
                                    <div class="card mb-4  p-3">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h4>Phone Number</h4>
                                                <p>This is only shared once you have a confirmed booking with another user. This is how we can all get in touch.</p>
                                            </div>
                                            <div className='col-md-6'>
                                                <form class="row g-3">
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control extra-cls-for-height" id="inputEmail4" placeholder='United States' />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control extra-cls-for-height" id="inputPassword4" placeholder='123 456 7890' />
                                                    </div>
                                                    <div class="col-12">
                                                        <button type="submit" class="text-center form-control button-csr-sinin">Verify via SMS</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DashboardProfile