const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport(
        sendgridTransport({
            auth: {
                api_key: process.env.SENDGRID_API_KEY,
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        }));

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(message)
}

module.exports = sendEmail;