
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => res.render('index'));

router.get('/about', (req, res) => res.render('about'));

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    try {
        await transporter.sendMail({
            from: email,
            to: 'progatemalawidev@gmail.com', 
            subject: `Message from ${name}`,
            text: message
        });
        res.redirect('/?success=true');
    } catch (error) {
        console.error(error);
        res.redirect('/?error=true');
    }
});

module.exports = router;