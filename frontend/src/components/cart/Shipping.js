import React, { Fragment, useState } from 'react'
import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../../actions/cartActions'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const Shipping = ({ history }) => {
    var cities = require('philippines/cities');
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    const hrs = String(today.getHours()).padStart(2,'0')
    const minutes = String(today.getMinutes()).padStart(2,'0')
    const todayDate = mm + '/' + dd + '/' + yyyy
    const todayTime = hrs +':'+ minutes
    const back = () => window.history.back();


    const { shippingInfo } = useSelector(state => state.cart)

    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)

    const [date] = useState( todayDate + ' ' + todayTime)
    const [name, setName] = useState(shippingInfo.name)

    const [barangay, setBarangay] = useState(shippingInfo.barangay)
    const [province] = useState("Metro Manila")
    //const [region, setRegion] = useState(shippingInfo.region)
    const [email, setEmail] = useState(shippingInfo.email)





    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingInfo({ address, city, phoneNo, postalCode,  barangay, province, email, name, date }))
        history.push('/confirm')
    }

    return (
        <Fragment>

            <MetaData title={'Shipping Info'} />

            <CheckoutSteps shipping />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-4">Shipping Info</h1>


                        <div className="form-group">
                            <label htmlFor="address_field">Name: </label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country_field">Cities</label>
                            <select
                                id="country_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value || null)}
                                required
                            >
                                <option value=''>- -</option>

                                {cities.map(city => {
                                        if(city.province === 'MM') {
                                            return  <option  key={city.name} value={city.name}>{city.name}</option>

                                        }

                                        return null
                                    })} 

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="barangay_field">Barangay</label>
                            <input
                                type="text"
                                id="barangay_field"
                                className="form-control"
                                value={barangay}
                                onChange={(e) => setBarangay(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="integer"
                                maxlength="4"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="phone_field">Phone No</label>
                        <PhoneInput defaultCountry="PH"
                            type="phone"
                            placeholder="Enter phone number e.g 09588107172"
                            minlength="12"
                            maxlength="13"
                            value={phoneNo}
                            onChange ={setPhoneNo}
                            limitMaxLength = {11}
                            required
                            />
                        </div>


                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            CONTINUE
                            </button>

                            <button 
                            id="backShip_btn" 
                            className="backbtn btn-block py-3" 
                            onClick={back}>Back
                            </button>

                    </form>

                </div>
            </div>

        </Fragment>
    )
}

export default Shipping
