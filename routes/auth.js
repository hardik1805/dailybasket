const {Router} = require('express');
const User = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const {generateTimeCode} = require("../utils/commonFunction");
// Read the HTML template
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

const router = Router();

// Signup API
router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(403).json({ message: 'All fields are required' });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const hashedPassword = await hashPassword(password);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Login API
router.post('/login', async (req, res) => {
    try {
        let {email, password} = req.body;
        if (!email || !password) {
            return res.status(403).json({message: 'All fields are required'});
        }
        // Check if user already exists
        const existingUser = await User.findOne({email}).lean();
        if (!existingUser) {
            return res.status(404).json({message: 'User does not exits'});
        }

        const doesPassMatch = await comparePassword(password, existingUser.password)

        if (!doesPassMatch) {
            return res.status(401).json({message: 'Incorrect email or password'});
        }
        const userDetails = existingUser
        delete userDetails.password; // remove password from the response
        delete userDetails.tempPass // remove temparory password
        console.log('User Details:', userDetails)
        jwt.sign(userDetails, process.env.JWT_SECRET,
            // 1 year in seconds
            { expiresIn: 31556926 }, (err, token) => {
                return res.status(200).json({ token: "Bearer " + token, userDetails: userDetails });
            })

    } catch (e) {
        res.status(500).json({ message: 'Server error', error: e.message });
        console.log('Error in login:',e)
    }
});

router.post('/verifyemail', async (req, res) => {
    try {
        let {email} = req.body;
        if (!email) {
            return res.status(403).json({message: 'Email is required'});
        }
        // Check if user exists
        const existingUser = await User.findOne({email})
        if (!existingUser) {
            return res.status(404).json({message: 'User does not exits'});
        }
        const code = generateTimeCode();
        existingUser.tempPass = code;
        await existingUser.save();

        const filePath = path.join(__dirname,'../pages/resetPassword.html')
        const htmlTemplate = fs.readFileSync(filePath, 'utf-8');
        const msg = {
            to: existingUser.email,
            from: 'dailybasket247@gmail.com',
            subject: 'Password Reset Verification',
            text: `Your verification code is: ${code}`,
            html: htmlTemplate.replace('{{code}}', code),
        };
        sgMail.send(msg)
            .then(() => {
                return res.status(200).json({message: 'Verification code sent successfully'});
            })
            .catch((error) => {
                console.error(error);
                new Error('Error in send mail')
            });
    } catch (e) {
        console.log('Error in forgot password:',e)
        res.status(500).json({ message: 'Server error', error: e.message });
    }
})

router.post('/verifycode', async (req, res) => {
    try {
        let {code, email} = req.body;
        code = Number(code)
        if (!code || !email) {
            return res.status(403).json({message: 'All fields are required'});
        }
        // Check if user exists
        const existingUser = await User.findOne({email})
        if (!existingUser) {
            return res.status(404).json({message: 'User does not exits'});
        }
        if (code === existingUser.tempPass && code < generateTimeCode(0)) {
            existingUser.tempPass = null;
            await existingUser.save();
            return res.status(200).json({message: 'Verification successful'});
        } else if (code > generateTimeCode(0)) {
            return res.status(403).json({message: 'Verification code expired'});
        } else {
            return res.status(403).json({message: 'Verification code is incorrect'});
        }


    } catch (e) {
        console.log('Error in forgot password:',e)
        res.status(500).json({ message: 'Server error', error: e.message });
    }
})

// Reset Password API
router.post('/resetpassword', async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        if (!email || !newPassword) {
            return res.status(403).json({ message: 'Email and password are required' });
        }
        // Validate new password (this can include your specific password rules)
        if (newPassword.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        // Hash the new password
        // Update the user's password
        existingUser.password = await hashPassword(newPassword);
        await existingUser.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (e) {
        console.log('Error in reset password:', e);
        res.status(500).json({ message: 'Server error', error: e.message });
    }
});

// Update User Details API
router.put('/update', async (req, res) => {
    try {
        const {email, ...updateFields} = req.body;

        // Validate email
        if (!email) {
            return res.status(400).json({message: 'Email is required'});
        }

        // Find the user
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        // Allowed keys for update
        const allowedKeys = [
            'firstName', 'lastName', 'phone', 'address', 'postcode',
            'paymentDetails.cardHolder', 'paymentDetails.cardNumber',
            'paymentDetails.expiryDate', 'paymentDetails.cvv'
        ];

        // Validate and filter update fields
        const updates = {};
        Object.keys(updateFields).forEach(key => {
            if (allowedKeys.includes(key)) {
                updates[key] = updateFields[key];
            }
        });

        // Validate payment details format
        if (updates.paymentDetails) {
            const {cardHolder, cardNumber, expiryDate, cvv} = updates.paymentDetails;
            if (cardNumber && typeof cardNumber !== 'number') {
                return res.status(400).json({message: 'Invalid card number'});
            }
            if (expiryDate && typeof expiryDate !== 'number') {
                return res.status(400).json({message: 'Invalid expiry date'});
            }
            if (cvv && typeof cvv !== 'number') {
                return res.status(400).json({message: 'Invalid CVV'});
            }
        }

        // Update user details
        Object.keys(updates).forEach(key => {
            user[key] = updates[key];
        });
        await user.save();

        res.status(200).json({message: 'User updated successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
});


module.exports = router;
