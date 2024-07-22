const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require('dotenv').config();

app.use(express.json());

// Configure CORS
const allowedOrigins = ['http://localhost:5173', 'https://chit-chat-2ia9.onrender.com'];
const corsOptions = {
    origin: function (origin, callback) {
        console.log("CORS request from origin:", origin); // Log the origin making the request
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Enable if you need to send cookies or HTTP authentication headers
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors()); // Use CORS middleware before routes

// Additional headers for debugging
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); // Allow all origins, you can change this to a specific one
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if (req.method === 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoute);

app.get("/", (req, res) => {
    res.send("Welcome to Chit Chat App");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected...");
}).catch(err => console.log("MongoDB Connection Error: ", err));
