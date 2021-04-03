import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'

const OrderSuccess = () => {


    return (
        <Fragment>

            <MetaData title={'Order Success'} />

            <div className="row justify-content-center">
                <div className="col-12 mt-5 text-center">
                    <img className="my-5 img-fluid d-block mx-auto" src="/images/order_success.png" alt="Order Success" width="200" height="200" />

                    <h2>Your Order has been placed successfully.</h2>
                    <br></br>
                    <h2>Wait for an email for confirmation of your reservation</h2>
                    <br></br>
                    <Link to='/' className="goToHome"> Go to Home</Link>
                </div>

            </div>
        
        </Fragment>
    )
}

export default OrderSuccess
