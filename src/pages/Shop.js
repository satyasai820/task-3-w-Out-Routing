import React from "react";
import '../App.css';

function Shop() {

    const cards = [
        {
            img: "./assets/images/shop-img-1.jpg",
            title: "Checks Shirt",
            price: '₹499',
            original: '₹980',
            discount: '25%'

        },
        {
            img: "./assets/images/shop-img-2.jpg",
            title: "Formal Shirt",
            price: '₹359',
            original: '₹790',
            discount: '22%'

        },
        {
            img: "./assets/images/shop-img-3.jpg",
            title: "Checks Shirt",
            price: '₹569',
            original: '₹890',
            discount: '15%'

        },
        {
            img: "./assets/images/shop-img-4.jpg",
            title: "Checks Shirt",
            price: '₹450',
            original: '₹820',
            discount: '23%'

        },
        {
            img: "./assets/images/shop-img-5.jpg",
            title: "Checks Shirt",
            price: '₹540',
            original: '₹680',
            discount: '18%'

        },
        {
            img: "./assets/images/shop-img-6.jpg",
            title: "Checks Shirt",
            price: '₹650',
            original: '₹980',
            discount: '25%'

        },
        {
            img: "./assets/images/shop-img-7.jpg",
            title: "Checks Shirt",
            price: '₹499',
            original: '₹980',
            discount: '25%'

        },
        {
            img: "./assets/images/shop-img-8.jpg",
            title: "Yellow Shirt",
            price: '₹350',
            original: '₹699',
            discount: '45%'

        }
    ]


    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/images/shop-banner-1.jpg" class="d-block w-100"  />
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/images/shop-banner-2.jpg" class="d-block w-100"  />
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/images/shop-banner-3.jpg" class="d-block w-100"  />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* cards data Here.... */}

            <div className="container " >
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {cards.map((item) => (
                    <div className="col">
                            <div className="card h-100 text-center" id="cards">
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p ><span className="fs-3 fw-bold">{item.price}</span> <strike>{item.original}</strike> <span className="fw-bold text-success">{item.discount} off</span> </p>
                                    <p>FREE Delivery by Trends</p>
                                    <button type="button" class="btn btn-success me-2">OrderNow</button>
                                    <button type="button" class="btn btn-warning">AddToFav</button>
                                </div>
                            </div>
                        </div>

                    ))
                    }
                </div>
            </div>

        </>
    )
}

export default Shop;