import React from 'react'
import { BsArrowDownLeft, BsBell, BsFillBellFill, BsHeart, BsInbox, BsPersonFill, BsStarFill, BsWallet, BsWallet2 } from 'react-icons/bs'
import UserImg from '../../assets/images/Ellipse30.png'
import ProfileiconImg from '../../assets/images/profileicon.png'
import DashbordIconImg from '../../assets/images/CombinedShape.png'
import GuestpassImg from '../../assets/images/guestpassicon.png'

import { MdClose, MdVerified } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
const DashbordSidebar = () => {
    const navigate = useNavigate()
    const handlepayment = (e) => {
        e.preventDefault()
        navigate("/dashboard-payment")
    }
    const handleSecurity = (e) => {
        e.preventDefault()
        navigate("/dashboard-security")
    }

    const handleWishlist = (e) => {
        e.preventDefault()
        navigate("/dashboard-wishlist")
    }
    const handleGuestPass = (e) => {
        e.preventDefault()
        navigate("/dashboard-guestpass")
    }
    
    return (
        <>
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
                                <a class="nav-link" href="#" onClick={handleGuestPass}>
                                    <img src={GuestpassImg} />
                                    <span> Guest Pass</span>
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
                                <a class="nav-link" href="#" onClick={handleWishlist}>
                                    <span><BsHeart /> Wishlist</span>
                                </a>
                            </li>
                            <li class="nav-item extra-nav-set-class">
                                <a class="nav-link" href="#" onClick={handlepayment}>
                                    <span ><BsWallet2 /> Payment</span>
                                </a>
                            </li>
                            <li class="nav-item extra-nav-set-class">
                                <a class="nav-link" href="#" onClick={handleSecurity}>
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
        </>
    )
}

export default DashbordSidebar