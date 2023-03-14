import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import InboxiconImg from '../../assets/images/inboxicon.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import { BsCheckCircle, BsPlusCircle } from 'react-icons/bs'
import Group344Img from '../../assets/images/Group344.png'
import { BiLocationPlus } from 'react-icons/bi'
import RectangleImg from '../../assets/images/Rectangle-110.png'
import '../DashboardInbox2/DashboardInbox2.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export const DashboardInbox2 = () => {
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
                                            <img src={InboxiconImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-8'>
                                            <h4 className='dashboard-heading4 pt-2'> Inbox</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4 p-3">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <input type="text" className='form-control extra-cls-for-height' placeholder='Search' />
                                        </div>

                                        <div className='col-md-8 f'>
                                            <button className='add-new-button float-end'>Filter <BsPlusCircle className='plus-circle-cl' /></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4 p-3">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <img src={RectangleImg} className="img-fluid" />
                                        </div>
                                        <div className='col-md-6'>
                                            <h2>Blink Fitness</h2>
                                            <p>16 E 4th St, New York, NY 10012, United States</p>
                                            <p>01/01/2023 - 01/02/2023</p>
                                            <button className='green-button-cst-for-inbox'><BsCheckCircle /> Approved</button>
                                        </div>
                                        <div className='col-md-3'>
                                            <h2 className=''>$224.10</h2>
                                            <button className='add-new-button m-2 '>...</button>
                                            <button className='add-new-button '>...</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-4 p-3">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <img src={RectangleImg} className="img-fluid" />
                                        </div>
                                        <div className='col-md-6'>
                                            <h2>Blink Fitness</h2>
                                            <p>16 E 4th St, New York, NY 10012, United States</p>
                                            <p>01/01/2023 - 01/02/2023</p>
                                            <button className='red-button-cst-for-inbox'><AiOutlineCloseCircle /> Declined</button>
                                        </div>
                                        <div className='col-md-3'>
                                            <h2 className=''>$224.10</h2>
                                            <button className='add-new-button m-2 '>...</button>
                                            <button className='add-new-button '>...</button>
                                        </div>
                                    </div>

                                </div>
                                <div class="card mb-4 p-3">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <img src={RectangleImg} className="img-fluid" />
                                        </div>
                                        <div className='col-md-6'>
                                            <h2>Blink Fitness</h2>
                                            <p>16 E 4th St, New York, NY 10012, United States</p>
                                            <p>01/01/2023 - 01/02/2023</p>
                                            <button className='green-button-cst-for-inbox'><BsCheckCircle /> Approved</button>
                                        </div>
                                        <div className='col-md-3'>
                                            <h2 className=''>$224.10</h2>
                                            <button className='add-new-button m-2 '>...</button>
                                            <button className='add-new-button '>...</button>
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
