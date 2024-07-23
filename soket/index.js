const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: [
            "http://localhost:5173",
            "https://chit-chat-2ia9.onrender.com",
            "https://realtimechitchatproj.netlify.app"
        ],
        methods: ["GET", "POST"]
    }
});

let onlineUsers = [];

io.on("connection", (socket) => {
    console.log("A new connection", socket.id);

    // Listen for new user connection
    socket.on("addNewUser", (userId) => {
        if (!onlineUsers.some((user) => user.userId === userId)) {
            onlineUsers.push({
                userId,
                socketId: socket.id,
            });
        }

        console.log("A new user joined", userId);
        console.log("onlineUsers: ", onlineUsers);
        io.emit("getOnlineUsers", onlineUsers);
    });

    // Listen for messages
    socket.on("sendMessage", (message) => {
        const user = onlineUsers.find((user) => user.userId === message.recipientId);

        if (user) {
            io.to(user.socketId).emit("getMessage", message);
            io.to(user.socketId).emit("getNotification", {
                senderId: message.senderId,
                isRead: false,
                date: new Date(),
            });
        }
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
        io.emit("getOnlineUsers", onlineUsers);
    });
});

io.listen(3000);