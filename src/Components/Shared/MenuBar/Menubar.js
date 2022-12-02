import React from 'react';
import './MenuBar.css'
import MenubarLogo from '../../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faCartShopping);

const Menubar = () => {

    return (
        <div>
            <nav class="menuBar navbar navbar-expand-lg bg-light">
                <div class="container d-flex">
                    <a class="navbar-brand menubar-img-cintainer" href="#">
                        <img className='w-100 h-100' src={MenubarLogo} alt="" />
                    </a>
                    <div className="">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item ms-4">
                                    <a class="nav-link active" aria-current="page" href="#">
                                        <FontAwesomeIcon icon="fa-cart-shopping" />
                                    </a>
                                </li>
                                <li class="nav-item ms-4">
                                    <a class="nav-link " href="#">Login</a>
                                </li>
                                <li class="nav-item ms-4">
                                    <button class="signout-btn btn nav-link rounded-5  px-3 py-1">Sign up</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;