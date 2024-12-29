require('dotenv').config();
const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const connectDB = require('./mongodb'); // Import the Mongoose connection
const authRoutes = require('./routes/auth');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
const port = 8080;
// Setup JWT strategy
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Authorization header
    secretOrKey: process.env.SECRTORKEY, // The secret key to validate the JWT
}, (jwtPayload, done) => {
    // You can verify the user from the payload here (usually you would query the database)
    // For simplicity, we are assuming the payload contains the user id
    if (jwtPayload) {
        return done(null, jwtPayload);
    } else {
        return done(null, false);
    }
}));

// Middleware for parsing JSON
app.use(express.json());
app.use(bodyParser.json()); // For JSON
app.use(bodyParser.urlencoded({ extended: true })); // For form data
// Logger Middleware to log all API calls and responses
app.use((req, res, next) => {
    const startTime = Date.now(); // Capture request start time

    // Log request details
    console.log(`[Request] ${req.method} ${req.url}`);
    console.log('Body:', req.body);

    // Capture the response
    const oldSend = res.send;
    res.send = function (data) {
        console.log(`[Response] ${req.method} ${req.url} ${res.statusCode}`);
        console.log('Response Body:', data);
        console.log(`Time Taken: ${Date.now() - startTime}ms`);
        oldSend.apply(res, arguments);
    };

    next(); // Pass control to the next middleware
});

// Initialize passport
app.use(passport.initialize());

// Connect to MongoDB
connectDB();

// Routes

// Auth routes (No token check here)
app.use('/api/auth', authRoutes);

// Protected Route (Token is required here)
app.get('/api/user', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send('This is a protected route');
});

// Middleware to check if token is present and valid for all APIs except /api/auth
app.use((req, res, next) => {
    // Skip token check for /api/auth routes (login, register, resetpassword)
    if (req.originalUrl.startsWith('/api/auth')) {
        return next(); // Skip authentication check for auth routes
    }

    // Use Passport to authenticate JWT token for all other routes
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({message: 'Unauthorized, invalid token or no token provided'});
        }
        req.user = user; // Attach user info to request object
        next(); // Continue to the next middleware or route handler
    })(req, res, next);
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
