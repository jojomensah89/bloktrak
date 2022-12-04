const { default: mongoose, model } = require("mongoose");

  const user = new mongoose.Schema({ 
      name : { 
        type : String, 
        required : true
      },
      email : { 
        type : String, 
        required : true,
        unique : true
      },
      password : { 
        type : String, 
        required : true
      },
      quote : { 
        type : String,
        default :"admin" 
       
      },
      BID : {
        type : String,
        
      }
      
  },
  {
    collection: "userModel"
  })
  
  

const Model =  mongoose.model("UserSchema",user);

module.exports = Model; 