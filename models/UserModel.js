const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {


    email: { type: String,  unique: true },
     name: { type: String },
    profilePicUrl:{type: String},
    progress:{ type:String, default:"0" },
    country:{type:String,default:"India"},
     dob:{type:String,default:"none"},
     gender:{type:String,default:"none"},
     martialStatus:{type:String,default:"none"},
     number:{type:String,default:"none"},
     studyprefernce:{
     course:{type:String,default:"none"},
     countrypref:{type:String,default:"none"},
     prefcource:{type:String,default:"none"},
     intake:{type:String,default:"none"},
     budge:{type:String,default:"none"},
     objective:{type:String,default:"none"}
     },
   
      experience:{
        jobrole:{type:String,default:"none"},
        company:{type:String,default:"none"},
        jobdis:{type:String,default:"none"},
        startdate:{type:String,default:"none"},
        enddate:{type:String,default:"none"},
      },
education:{
    ten:{
       percentage:{type:String,default:"none"}
    },
    twel:{
        percentage:{type:String,default:"none"}
    },
    graduation:{
        cgpa:{type:String,default:"none"}
    },
    postgradutation:{
        cgpa:{type:String,default:"none"}
    },
},
    role: { 
        type: String, default: "user", enum: ["user", "root"] 
    },
    
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
