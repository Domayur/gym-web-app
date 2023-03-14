import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import HeartImg from '../../assets/images/heart-filled.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import { BsPlusCircle } from 'react-icons/bs'
import RectangleB1 from '../../assets/images/Rectangle-b-5.png'
import RectangleB2 from '../../assets/images/Rectangle-b-5.png'


export const DashbordWishlist2 = () => {
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
                                        <div className='col-md-8'>
                                            <h4 className='dashboard-heading4 pt-2'> Wishlist</h4>
                                        </div>
                                        <div className='col-md-3'>
                                            <button className='add-new-button' data-bs-toggle="modal" data-bs-target="#CreateNewWishlistModel">Create New <BsPlusCircle className='plus-circle-cl' /></button>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-4  p-3">
                                    <div class="row row-cols-1 row-cols-md-4 g-4">
                                        <div class="col-6 col-lg-4 col-md-4">
                                            <div class="card">
                                                <img src={RectangleB1} class="card-img-top" alt={RectangleB1} />
                                            </div>
                                            <div class="card-block mt-1">
                                                <h4 class="card-title">Near Me</h4>
                                                <p class="card-text">2 Gym</p>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-4 col-md-4">
                                            <div class="card">
                                                <img src={RectangleB2} class="card-img-top" alt={RectangleB2} />
                                            </div>
                                            <div class="card-block mt-1">
                                                <h4 class="card-title">New York</h4>
                                                <p class="card-text">3 Gym</p>

                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-4 col-md-4">
                                            <div class="card">
                                                <img src={RectangleB2} class="card-img-top" alt={RectangleB2} />
                                            </div>
                                            <div class="card-block mt-1">
                                                <h4 class="card-title">To Check</h4>
                                                <p class="card-text">0 Gym</p>

                                            </div>
                                        </div>
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
