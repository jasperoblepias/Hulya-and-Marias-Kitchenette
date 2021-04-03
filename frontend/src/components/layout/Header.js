import React from 'react'
import { Fragment} from 'react'
import {useSelector } from 'react-redux'

import '../../App.css'

const Header1 = () => {



    const { cartItems } = useSelector(state => state.cart)



    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img src="/images/ham_logo.png" alt="hamlogo"/>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="navbar-nav">

                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        
                        <li class="nav-item dropdown active">

                            <a class="nav-link" href="home"
                                id="navbarDropdownMenuLink" data-toggle="dropdown">Menu
                            </a>

                            <li class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                
                                <a class="nav-link" href="/menu/pasta">Pasta's & Noodles</a>
                                <a class="nav-link" href="/menu/dessert">Desserts</a>
                                <a class="nav-link" href="/menu/seafood">Seafood</a>
                                <a class="nav-link" href="/menu/chicken">Chicken</a>
                                <a class="nav-link" href="/menu/beef">Beef</a>
                                <a class="nav-link" href="/menu/pork">Pork</a>
                                <a class="nav-link" href="/menu/special">Special Orders</a>

                            </li>

                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/aboutus">About us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/contactus">Contact us</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-md-auto">
                        
                        <li class="nav-item active">
                            <a class="nav-link" href="/cart"><i className="fa fa-shopping-cart"></i>Cart<span id="cart_count">  {cartItems.length}</span></a>
                        </li>

                    </ul>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header1
