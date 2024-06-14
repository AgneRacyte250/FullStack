var express = require('express');
var server = express();
var mongoose = require('mongoose');
var housingRoutes = require('./src/routes/housingRoutes');
var authRoutes = require('./src/routes/authRoutes');
var cors = require('cors');
var session = require('express-session');
var MongoStore = require('connect-mongo');

// Connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/Housing");
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
}

connectDB();

// Middleware setup
server.use(express.json());
server.use(cors());

// Session setup
server.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/Housing' }),
    cookie: { maxAge: 180 * 60 * 1000 } // 3 hours
}));

// Routes setup
server.use('/api', housingRoutes);
server.use('/auth', authRoutes);

// Start the server
server.listen(8000, function check(error) {
    if (error) {
        console.log("Server error:", error);
    } else {
        console.log("Server Started");
    }
});
