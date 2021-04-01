const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendEmailCustomer = require('../utils/sendEmailcustomer');

// Create a new order   =>  /api/v1/order/new
exports.newOrder = catchAsyncErrors(async(req, res, next) => {



    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        shippingPrice,
        totalPrice,

    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        shippingPrice,
        totalPrice,
    })

    const message = `
                    <center>
                    <img src= https://res.cloudinary.com/djccz4qpk/image/upload/v1617281661/ham_logo_u7boxc.png>
                    <br>
                    <p><i>This is a system generated message. Please DO NOT REPLY to this email.</i></p>
                    <br>
                    <p>Good Day, ${shippingInfo.name}!</p>
                    <br>
                    <p>Your order has been added to the reservation list!</p>
                    <p>Wait patiently for an email from Hulya & Maria's Kitchenette (hulyaandmarias@gmail.com) for your order confirmation.</p>
                    <p>If you have any concern/s, please email us on hulyaandmarias@gmail.com</p>
                    <br>
                    <p>Thank you and Godbless!</p>
                    </center>`

    await sendEmailCustomer({
        email: shippingInfo.email,
        subject: "Hulya and Maria's Kitchenette: Order Confirmation",
        message
    })

    res.status(200).json({
        success: true,
        order
    })
})


// Get single order   =>   /api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors(async(req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

// Get logged in user orders   =>   /api/v1/orders/me
exports.myOrders = catchAsyncErrors(async(req, res, next) => {
    // const orders = await Order.find({ user: req.user.id })

    res.status(200).json({
        success: true,
        orders
    })
})


// Get all orders - ADMIN  =>   /api/v1/admin/orders/
exports.allOrders = catchAsyncErrors(async(req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.itemsPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

// Update / Process order - ADMIN  =>   /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async(req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 400))
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.status,
        order.deliveredAt = Date.now()

    await order.save()

    res.status(200).json({
        success: true,
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({ validateBeforeSave: false })
}

// Delete order   =>   /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors(async(req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    await order.remove()

    res.status(200).json({
        success: true
    })
})