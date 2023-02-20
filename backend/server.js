const app = require('express')();
// const io = require("socket.io")();
//2.line use for define io.
const server = require('http').createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("What is scoket: ", socket);
    console.log("socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("what is payload: ", payload);
        io.emit("chat", payload);
    });
    
});

// app.listen(5000,() => console.log("server is active..."));

server.listen(5000, () => {
    console.log("server is listening at port 5000...");
});

