var mongoose = require("mongoose");
var plm = require('passport-local-mongoose');



var userSchema =mongoose.Schema({
  username:String, 
  pick:String,
  friends:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }],
  chats:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }],
  currentSocket:String
})

userSchema.plugin(plm)

module.exports = mongoose.model("user", userSchema);
