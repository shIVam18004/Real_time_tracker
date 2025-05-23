const express = require("express");
const app =express();
const path =require("path");

const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));


io.on("connection",function (socket){
    socket.on("send-location", function (data){
        io.emit("receive-location", {id: socket.id, ...data});
    });
    
    socket.on("disconnect", function(){
        io.emit("user-disconnected", socket.id);
    });
});


app.get('/', function(req,res){
    res.render("index")
})

// server.listen(3000, '0.0.0.0', () => {
//     console.log("Server running on http://192.168.0.110:3000");
//   });

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;