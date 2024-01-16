import React from "react";
import { Icon } from '@iconify/react';
function Account() {
    return (
        <>
            <div className="text-center border shadow mt-1 border-top-0 ">
                <Icon icon="mdi:account-tie" color="black" width="250" height="250" />
                <p className="fs-1 fw-bold text-success  ">Log In</p>
            </div>
            <div className="container">
                <div className="row row-cols-1  ">
                    <div className="col text-center  mt-5 ">
                        <img src="./assets/images/account-img-1.jpg" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-md-1 row-cols-lg-2 justify-content-center">
                    <form class="row g-3 border shadow" id="logForm">
                        <div class="col-md-6">
                            <label class="form-label ">Name</label>
                            <input type="text" class="form-control shadow" id="inputEmail4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Phone Number</label>
                            <input type="text" class="form-control shadow" id="inputPassword4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control shadow" id="inputEmail4" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control shadow" id="inputPassword4" required />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control shadow" id="inputAddress" placeholder="1234 Main St" required />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control shadow" id="inputAddress2" placeholder="Apartment, studio, or floor" required />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control shadow" id="inputCity" required />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select shadow">
                                <option selected>Choose...</option>
                                <option>Andhra Pradesh</option>
                                <option>Bangalore</option>
                                <option>Telangana</option>
                                <option>Delhi</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" class="form-control shadow" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label " for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-success mb-4 ">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Account;