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
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Enable if you need to send cookies or HTTP authentication headers
};

app.use(cors(corsOptions));

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
