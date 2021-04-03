import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    alt="product"
                    src={product.images[0].url}
                />
                <div className="card-body d-flex flex-column ">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </h5>
                    <div className=" mt-auto">
                    </div>
                    <p className="card-text ">₱{product.price}.00</p>
                    <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">Order now</Link>
                </div>
            </div>
        </div>
    )
}

export default Product
