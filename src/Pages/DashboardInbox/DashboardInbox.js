import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import InboxiconImg from '../../assets/images/inboxicon.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
import { BsPlusCircle } from 'react-icons/bs'
 import Group344Img from '../../assets/images/Group344.png'
import { BiLocationPlus } from 'react-icons/bi'


export const DashboardInbox = () => {
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
                                    <div className='text-center p-3'>
                                        <img src={Group344Img} />
                                        <h3 className='text-black mt-2'>There are no messages in your inbox</h3>
                                        <p>When hosts respond to your inquiries or booking requests, you can find their messages in this section.</p>
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
