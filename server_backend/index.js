const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require('dotenv').config();

// CORS configuration for production and development
const allowedOrigins = [
    "https://realtimechitchatproj.netlify.app",
    "http://localhost:5173",
    "http://localhost:3000"
];

const corsOptions = {
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(express.json());
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    }
    next();
});
app.use(cors(corsOptions));

// API Routes
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ 
        message: "Welcome to Chit Chat App API", 
        status: "Server is running",
        timestamp: new Date().toISOString()
    });
});

// Health check for deployment services (Render expects /healthz)
app.get("/healthz", (req, res) => {
    res.status(200).json({ status: "OK", uptime: process.uptime() });
});

const port = process.env.PORT || 8000;
const uri = process.env.ATLAS_URI;

// Error handling for missing environment variables
if (!uri) {
    console.error("ATLAS_URI environment variable is not set");
    process.exit(1);
}

// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// MongoDB connection with better error handling
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected successfully");
}).catch(err => {
    console.error("MongoDB Connection Error: ", err);
    process.exit(1);
});
