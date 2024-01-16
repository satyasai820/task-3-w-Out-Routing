import React from "react";
import '../App.css'
function Cards() {
    return (
        <div className="container">
            <p className="text-center fs-1 fw-bold mt-5 text-success fst-italic" >Styles For All Occasions</p>
            <div class="row row-cols-1  row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-2 mt-5 text-center mb-5">
                <div className="col">
                    <img src="./assets/images/img-cards-1.jpg" className="img-fluid"  id="img" alt="img-1" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-2.jpg" className="img-fluid"  id="img" alt="img-2" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-3.jpg" className="img-fluid" id="img" alt="img-3" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-4.jpg" className="img-fluid" id="img" alt="img-4" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-5.jpg" className="img-fluid" id="img" alt="img-5" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-6.jpg" className="img-fluid" id="img" alt="img-6" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-7.jpg" className="img-fluid" id="img" alt="img-7" />
                </div>
                <div className="col">
                    <img src="./assets/images/img-cards-8.jpg" className="img-fluid" id="img" alt="img-8" />
                </div>
            </div>
        </div>
    );
}
export default Cards;