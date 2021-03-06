import React, {  } from 'react'

const Footer = () => {
    return (
        <footer>
            <div class="row my-5 justify-content-center py-5 bg-light">
                <div class="col-11">
                    <div class="row ">
                        <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                            <h3 class="text-muted mb-md-0 mb-5 bold-text">Hulya & Maria's Kitchenette</h3>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 class="mb-3 mb-lg-4 bold-text "><b></b></h6>
                            <ul class="list-unstyled">
                                <li><a className="" href="/">Home</a></li>
                                <li><a className="" href="/">About</a></li>

                            </ul>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b></b></h6>
                            <ul class="list-unstyled">
                                <li class="text-muted">
                                    <a href="https://www.facebook.com/hulyaandmaria">
                                    <i className="fa fa-facebook-official"></i>  
                                     hulyaandmarias
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/hulyaandmarias">
                                    <i className="fa fa-instagram" ></i>  
                                    ​​ hulyaandmarias
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                            <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span>
                                <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> Hulya & Maria's Kitchenette All Rights Reserved.</small>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                            <h6 class="mt-55 mt-2 text-muted bold-text"><b>Email</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> hulyaandmarias@gmail.com</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
