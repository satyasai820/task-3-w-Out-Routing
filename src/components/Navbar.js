import React, { useState } from "react";
import { Icon } from '@iconify/react';
import '../App.css';
import Home from "../pages/Home";
import Account from "../pages/Account";
import Wishlist from "../pages/Wishlist";
import Shop from "../pages/Shop";

function Navbar() {
    const [currentPage, setCurrentPage] = useState('home')
    const changePage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />
            case 'shop':
                return <Shop />
            case 'wishlist':
                return <Wishlist />
            case 'account':
                return <Account />
                default:
                    return null;
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <p className="navbar-brand text-white fw-bold fst-italic me-5 "><Icon icon="game-icons:elephant-head" color="red" width="40" height="40" /></p>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto">
                            <ul className="navbar-nav me-0 mb-2 mb-lg-0 nav itemsContainer">
                                <li className="nav-item">
                                    <p
                                        className='nav-link fw-bold me-3 text-white'
                                        onClick={() => setCurrentPage('home')}>
                                        Home
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p
                                        className="nav-link fw-bold me-3 text-white "
                                        onClick={() => setCurrentPage('shop')}>
                                        Shop
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p
                                        className="nav-link fw-bold me-3 text-white "
                                        onClick={() => setCurrentPage('wishlist')}>
                                        Wishlist
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p
                                        className="nav-link fw-bold me-3 text-white "
                                        onClick={() => setCurrentPage('account')}>
                                        Account
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div>{changePage()}</div>
        </>
    );
}

export default Navbar;
