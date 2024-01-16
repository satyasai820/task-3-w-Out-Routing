import React from "react";
import { Icon } from '@iconify/react';
import '../App.css'

function Wishlist() {

    const cardData = [
        {
            img: "./assets/images/fav-img-1.jpg",
            title: "Black Shirt",
            price: '₹699',
            original: '₹980',
            discount: '22%'

        },
        {
            img: "./assets/images/fav-img-2.jpg",
            title: "Printed Shirt",
            price: '₹699',
            original: '₹980',
            discount: '22%'

        },
        {
            img: "./assets/images/fav-img-3.jpg",
            title: "Checked Shirt",
            price: '₹699',
            original: '₹980',
            discount: '22%'

        },
        {
            img: "./assets/images/fav-img-4.jpg",
            title: "Black Printed Shirt",
            price: '₹699',
            original: '₹980',
            discount: '22%'

        },
    ]

    const similarData = [
        {
            img: "./assets/images/fav-img-5.jpg"
        },
        {
            img: "./assets/images/fav-img-6.jpg"
        },
        {
            img: "./assets/images/fav-img-7.jpg"
        },
        {
            img: "./assets/images/fav-img-8.jpg"
        }
    ]

    return (
        <>
            <div className="text-center border shadow mt-1 border-top-0 ">
                <Icon icon="bi:heart-fill" color="red" width="250" height="250" className="mt-3" />
                <p className="fs-1 fw-bold text-success fst-italic ">Favorite Items</p>
            </div>
            {/* cards items Here... */}

            {cardData.map((item) => (
                <div class="card mb-3 container mt-5  border-0 text-center" style={{ maxWidth: '770px' }} >
                    <div class="row g-0 shadow" id="fav-card">
                        <div class="col-md-4">
                            <img src={item.img} class="img-fluid rounded-start" id="images" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title fs-2">{item.title}</h5>
                                <p ><span className="fs-3 fw-bold">{item.price}</span> <strike className="fs-5">{item.original}</strike> <span className="fw-bold text-success fs-5">{item.discount} off</span> </p>
                                <p className="fs-5">Select Size: <span className="fw-bold">S   M    L   XL</span> </p>
                                <p class="card-text"><small class="text-muted">FREE Delivery by Trends</small></p>
                                <button type="button" class="btn btn-success me-2">OrderNow</button>
                                <button type="button" class="btn btn-danger me-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <p className="fs-1 text-center mt-5 mb-5 fw-bold fst-italic text-warning">Similar Styles </p>

            <div className="container " >
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
                    {similarData.map((item) => (
                        <div className="col">
                            <div className="card h-100 text-center">
                                <img src={item.img} className="card-img-top" alt="..." />
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>


        </>

    )
}

export default Wishlist;