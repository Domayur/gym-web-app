import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import DashbordIconImg from '../../assets/images/CombinedShape.png'
 import GrouImg from '../../assets/images/Group-382.png'
import BellImg from '../../assets/images/bellicon.png'
import CloseImg from '../../assets/images/closeGroup47.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import '../Dashboard/Dashboard.css'


const Dashboard = () => {
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