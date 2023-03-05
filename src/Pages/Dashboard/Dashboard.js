import React from 'react'
import { BsArrowDownLeft, BsBell, BsFillBellFill, BsHeart, BsInbox, BsPersonFill, BsStarFill, BsWallet, BsWallet2 } from 'react-icons/bs'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import DashbordIconImg from '../../assets/images/CombinedShape.png'
import UserImg from '../../assets/images/Ellipse30.png'
import GrouImg from '../../assets/images/Group-382.png'
import BellImg from '../../assets/images/bellicon.png'
import CloseImg from '../../assets/images/closeGroup47.png'
import ProfileiconImg from '../../assets/images/profileicon.png'
import '../Dashboard/Dashboard.css'
import { MdClose, MdVerified } from "react-icons/md";


const Dashboard = () => {
    return (
        <>
            <SubHeader />
            <section className='payment-section-cst pt-4 pb-4'>
                <div className='container mb-4'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="d-none d-md-block col-md-5 col-lg-4 col-xl-3">
                                <div class="card mb-4 p-4">
                                    <div class="pt-3">
                                        <ul class="navbar-nav">
                                            <div className='text-center mb-4'>
                                                <img src={UserImg} />
                                                <h4 className='mt-3'>Martin Jefferson</h4>
                                                <p><MdVerified /> Your account Unverified</p>
                                            </div>

                                            <hr class="sidebar-divider my-0" />
                                            <li class="nav-item active extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <img src={DashbordIconImg} />
                                                    <span> Dashboard</span>
                                                </a>
                                            </li>
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <img src={ProfileiconImg} />
                                                    <span> Profile</span>
                                                </a>
                                            </li>
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <span><BsInbox /> Inbox</span>
                                                </a>
                                            </li>
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <img src={ProfileiconImg} />
                                                    <span> Bookings</span>
                                                </a>
                                            </li>
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <span><BsHeart /> Wishlist</span>
                                                </a>
                                            </li>
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#PaymentModel">
                                                    <span ><BsWallet2 /> Payment</span>
                                                </a>
                                            </li>
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <img src={ProfileiconImg} />
                                                    <span> Security</span>
                                                </a>
                                            </li>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <li class="nav-item extra-nav-set-class">
                                                <a class="nav-link" href="#">
                                                    <span><BsArrowDownLeft /> Log out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>


                            <div class="col-md-7 col-lg-8 col-xl-9 ">
                                <div class="card mb-4  p-3">
                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <img src={DashbordIconImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-11'>
                                            <h4 className='dashboard-heading4 pt-2'> Dashboard</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-6 mb-4 ">
                                            <div class="card border-left-primary  h-100 py-2">
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="">
                                                                <p> Gym Visits </p>
                                                            </div>
                                                            <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-4 col-md-6 mb-4 ">
                                            <div class="card border-left-success  h-100 py-2">
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="">
                                                                <p>Number of Gyms</p>
                                                            </div>
                                                            <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-4 col-md-6 mb-4 ">
                                            <div class="card border-left-info  h-100 py-2">
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="">
                                                                <p>Total Bookings</p>
                                                            </div>
                                                            <div class="row no-gutters align-items-center">
                                                                <div class="col-auto">
                                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">0</div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-4  p-3">
                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <img src={BellImg} class="img-fluid extra-class-cst-img-dasbord p-3" />
                                        </div>
                                        <div className='col'>
                                            <h4 className='notoficationheadinh pt-2'> Notifications</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-4  p-3">
                                    <div className='row'>
                                        <div className='col-md-1'><img src={GrouImg} class="img-fluid extra-class-cst-img-dasbord  p-3" /></div>
                                        <div className='col-md-10'>
                                            <p style={{ "color": "#151927" }}> Please confirm your email address by clicking on the link we just emailed you. If
                                                you cannot find the email, you can request a new confirmation email or change
                                                your email address.
                                            </p>
                                            <p>September 21,2022</p>
                                        </div>
                                        <div className='col-md-1'>
                                            <img src={CloseImg} className='float-end' style={{ "cursor": "pointer" }} />
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

export default Dashboard