require('dotenv').config();
const express = require('express');
const connectDB = require('./mongodb'); // Import the Mongoose connection
const authRoutes = require('./routes/auth');
const app = express();
const port = 8080;


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes

app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Welcome');
});

// Example Protected Route
app.get('/protected', (req, res, next) => {
    if (!req.user) {
        next(new Error('Unauthorized!'));
    } else {
        next();
    }
}, (err, req, res, next) => {
    if (err.message === 'Unauthorized!') {
        return res.status(401).send(err.message);
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




// Send email
// subject: 'Password Reset Request',
//     text: `Your verification code is ${verificationCode}. This code will expire in 10 minutes.`,
//     html: `<p>Your verification code is <strong>${verificationCode}</strong>. This code will expire in <strong>10 minutes</strong>.</p>`,




