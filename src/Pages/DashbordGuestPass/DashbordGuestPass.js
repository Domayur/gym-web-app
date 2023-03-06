import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import WishlistImg from '../../assets/images/wishlistimg.png'
import GuestpassImg from '../../assets/images/guestpassicon.png'


import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import { BiLocationPlus } from "react-icons/bi";


const DashbordGuestPass = () => {
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
                                            <img src={GuestpassImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-11'>
                                            <h4 className='dashboard-heading4 pt-2'> Guest Pass</h4>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-4 p-3">
                                    <div className='text-center p-3'>
                                        <img src={WishlistImg} />
                                        <h3 className='text-black mt-2'>You don’t have any listings!</h3>
                                        <p>List your gym or fitness center with us and take the first step towards growing your business</p>
                                        <button className='add-new-button' >Add a New Listing <BiLocationPlus className='plus-circle-cl' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DashbordGuestPass