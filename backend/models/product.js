const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    }],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Pasta',
                'Desserts',
                'Seafood',
                'Chicken',
                'Beef',
                'Pork',
                'SpecialOrders'

            ],
            message: 'Please select correct category for product'
        }
    },
    // seller: {
    //     type: String,
    //     required: [true, 'Please enter product seller']
    // },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);