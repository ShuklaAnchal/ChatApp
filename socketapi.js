const io = require( "socket.io" )();
const user = require("./routes/users");
const chat = require("./routes/chat");
const users = require("./routes/users");
const { Socket } = require("socket.io");


const socketapi = {
    io: io  
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
  
    // const socketId = socket.id
    //  console.log(socketId) 
     
     socket.on('newUserConnected', async msg =>{
        var currentUser = await user.findOne({
            username: msg.user
        })
        currentUser.currentSocket = socket.id
        await currentUser.save();
        console.log(currentUser)
     })

    //  Socket.on('newmsg', async msg=>{
    //     // console.log(msg)
    //      var toUser = await users.findOne({
    //         username: msg.users
    //      })
    //    socket.to(toUser.currentSocket).emit('msg', msg)
    //      console.log(toUser);
    //  })



    socket.on("newmsg", async (msg) =>{
        console.log("first",msg.toUser)
        console.log("second",msg)
    //     var toUser = await users.findOne({
    //         username: msg.toUser
    //     })
    //    console.log("helo" ,toUser);

    //    socket.to(toUser.currentSocket).emit('tomsg', msg);
    })

});


// end of socket.io logic

module.exports = socketapi;