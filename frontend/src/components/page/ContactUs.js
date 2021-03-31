import React, { Fragment } from 'react'
import Loader from '../layout/Loader'

const ContactUs = () => {

    return (
        <Fragment>

            <div class="row">
                <div class="image">
                    <h1 id="ContactUsTxt">
                        Contact Us
			</h1>
                    <img className="HulyaAndMariaspng" alt="Bootstrap Image Preview" src="/images/contact_us.png"></img>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">
                    <p></p>
                </div>
                <div class="col-md-5" classname="Left">


                    <div >
                        <h1 id="HowToContactUs">
                            How to Contact Us
			</h1>
                    </div>

                    <div >
                        <p id="ContactUsTxt">
                            If you have any queries or concerns, do not hesitate to message us in
                            any of the social media platforms. We will be sure to do our best to
                            diligently answer all of your concerns.
                        </p>
                    </div>




                </div>
                <div class="col-md-5" id="Right">

                    <div class="row pr-4">

                        <div class="col-xl-3 col-sm-6 mb-3">
                            <i class="fa fa-map-marker fa-2x" aria-hidden="true">  </i>
                        </div>
                        <div class="col-xl-6 col-sm-6 mb-3">

                            <p className="para"> Sampaloc, Manila </p>
                        </div>

                    </div>

                    <div class="row pr-4">

                        <div class="col-xl-3 col-sm-6 mb-3">
                            <i class="fa fa-facebook-official fa-2x" aria-hidden="true" id="FBLogo"> </i>
                        </div>
                        <div class="col-xl-6 col-sm-6 mb-3">
                            <a href="https://www.facebook.com/hulyaandmaria" target="_blank">

                                <p className="para"> Hulya & Maria's Kitchenette </p>
                            </a>
                        </div>

                    </div>

                    <div class="row pr-4">

                        <div class="col-xl-3 col-sm-6 mb-3">

                            <i class="fa fa-envelope-o fa-2x" aria-hidden="true"> </i>
                        </div>
                        <div class="col-xl-6 col-sm-6 mb-3">

                            <p className="para"> hulyaandmarias@gmail.com </p>
                        </div>

                    </div>

                    <div class="row pr-4">

                        <div class="col-xl-3 col-sm-6 mb-3">
                            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </div>
                        <div class="col-xl-6 col-sm-6 mb-3">

                            <a href="https://www.instagram.com/hulyaandmarias/?hl=en" target="_blank">

                                <p className="para"> @hulyaandmarias </p>
                            </a>
                        </div>

                    </div>


                </div>

                <div class="col-md-1">
                    <p></p>
                </div>
            </div>

        </Fragment>
    )
}

export default ContactUs
