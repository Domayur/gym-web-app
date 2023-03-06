

import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import DashbordIconImg from '../../assets/images/CombinedShape.png'
import { BsArrowDownLeft, BsBell, BsFillBellFill, BsHeart, BsInbox, BsPersonFill, BsPlusCircle, BsStarFill, BsWallet, BsWallet2 } from 'react-icons/bs'
import UserImg from '../../assets/images/Ellipse30.png'
import ProfileiconImg from '../../assets/images/profileicon.png'
import { MdClose, MdVerified } from "react-icons/md";
import GrouImg from '../../assets/images/Group-382.png'
import BellImg from '../../assets/images/bellicon.png'
import CloseImg from '../../assets/images/closeGroup47.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import WalletImg from '../../assets/images/walleticon.png'
import PaymentImg from '../../assets/images/cardpayment.png'

import '../DashboardPayment/DashboardPayment.css'


const DashboardPayment = () => {
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
                                            <img src={WalletImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-11'>
                                            <h4 className='dashboard-heading4 pt-2'> Payment</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-4  p-3">
                                    <div className='text-center p-3'>
                                        <img src={PaymentImg} />
                                        <h3 className='text-black'>Add a Payment Method</h3>
                                        <p>On this page, you can add a payment method to your account. This will allow you to make transactions and bookings on our platform.</p>
                                        <button className='add-new-button' data-bs-toggle="modal" data-bs-target="#PaymentModel">Add New  <BsPlusCircle className='plus-circle-cl'/></button>
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

export default DashboardPayment