import React from "react";
import { Icon } from '@iconify/react';

function Footer(){
    return(
        <footer class="bg-dark text-light text-center text-md-start mt-5 ">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase text-warning fw-bold"> <Icon icon="game-icons:elephant-head" color="red" width="40" height="40" />Trends company</h5>

                    <p>
                        The Trends has ergonomic shoulder straps and a padded back that will keep you comfortable.
                        Apart from three main compartments, its has to Avaliable all over India Products
                    </p>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase mb-2 text-danger fw-bold">About</h5>
                    <ul class="list-unstyled">
                        <li>
                            <p class="text-white">Company</p>
                        </li>
                        <li>
                            <p class="text-white">Corporate News</p>
                        </li>
                        <li>
                            <p class="text-white">Press Center</p>
                        </li>
                        <li>
                            <p class="text-white">Careers</p>
                        </li>
                    </ul>
                </div>


                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                    <h5 class="text-white">Let's be in Touch</h5>
                    <ul className="list-unstyled mb-0">
                    <Icon className="me-3" icon="devicon:facebook" width="30" height="30" />
                    <Icon className="me-3" icon="skill-icons:instagram" width="30" height="30" />
                    <Icon className="me-3" icon="skill-icons:twitter" width="30" height="30" />
                    <Icon className="me-3" icon="bi:amazon" width="30" height="30" />
                            
                        </ul>
                </div>
            </div>
        </div>
        <div class="text-center p-3 bg-dark text-info">
            © 2023 Copyright:
            <a class="text-white"> Trends@gmail.com</a>
        </div>
    </footer>
    );
}
export default Footer;