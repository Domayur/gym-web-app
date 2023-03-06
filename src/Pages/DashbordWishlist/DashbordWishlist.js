import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import WishlistImg from '../../assets/images/wishlistimg.png'
import HeartImg from '../../assets/images/heart-filled.png'

import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import { BsPlusCircle } from 'react-icons/bs'


export const DashbordWishlist = () => {
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
                                            <img src={HeartImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-11'>
                                            <h4 className='dashboard-heading4 pt-2'> Wishlist</h4>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-4  p-3">
                                    <div className='text-center p-3'>
                                        <img src={WishlistImg} />                                        
                                        <h3 className='text-black'>No Gyms in Your Wishlist</h3>
                                        <p>Add gyms to your wishlist to easily book them later or receive notifications when they become available.</p>
                                        <button className='add-new-button' data-bs-toggle="modal" data-bs-target="#PaymentModel">Explore Now <BsPlusCircle className='plus-circle-cl' /></button>
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
