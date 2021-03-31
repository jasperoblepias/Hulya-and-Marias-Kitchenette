const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        barangay: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        notes: {
            type: String
        },
        date: {
            type: Date,

        }
    },
    /*
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },*/
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
    }],


        itemsPrice: {
        type: Number,
        required: true,
        defaultValue: 0.0
        },


    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})


module.exports = mongoose.model('Order', orderSchema)