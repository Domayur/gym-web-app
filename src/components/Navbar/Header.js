import React from 'react'
import NavLogo from '../../assets/images/BrandLogo.png'
import InfinityLogo from '../../assets/images/infinityLogo.png'

import '../Navbar/Header.css'
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid">
                    <img class="navbar-brand cst-nav-img" src={NavLogo} />
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link disabled">Disabled</a> */}
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item p-2">
                                    <img class="cs-infinity-img" src={InfinityLogo} />
                                    <button class="btn partner-with-us-btn" type="button">Partner with Us</button>
                                </li>
                                <li class="nav-item p-2">
                                    <button class="btn partner-with-us-btn" type="button">Login</button>
                                </li>
                                <li class="nav-item p-2">
                                    <button class="btn cst-btn-nav" type="button">Signup</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header