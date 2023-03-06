import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import DashbordIconImg from '../../assets/images/CombinedShape.png'
import ShieldImg from '../../assets/images/shieldicon.png'
import DashbordSidebar from '../../components/DashbordSidebar/DashbordSidebar'
 
const DashbordSecurity = () => {
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
                                            <img src={ShieldImg} class="img-fluid extra-class-cst-img-dasbord  p-3" />
                                        </div>
                                        <div className='col-md-11'>
                                            <h4 className='dashboard-heading4 pt-2'> Security</h4>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-4  p-3">
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <h5> Change Password </h5>
                                            <p>8 characters or longer. Combine upper and lowercase letters and numbers.</p>
                                        </div>
                                        <div className='col-md-5 p-2' >
                                            <form className='row g-3'>
                                                <div className='col-12'>
                                                    <input type="password" class="form-control extra-cls-for-height" id="inputAddress" placeholder="Old Password" fdprocessedid="o3y81" />
                                                </div>
                                                <div className='col-12'>
                                                    <input type="password" class="form-control extra-cls-for-height" id="inputAddress" placeholder="New Password" fdprocessedid="o3y81" />
                                                </div>
                                                <div className='col-12'>
                                                    <input type="password" class="form-control extra-cls-for-height" id="inputAddress" placeholder="Confirm New Password" fdprocessedid="o3y81" />
                                                </div>
                                                <div className='col-12'>
                                                <button type="button" class="text-center form-control button-csr-sinin" >Update Password</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='col-md-2'></div>
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

export default DashbordSecurity