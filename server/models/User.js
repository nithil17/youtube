// =====================
// Imports
// =====================

import mongoose from "mongoose";

// =====================
// User Schema
// =====================

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        default:"user"
    },

    avatar:{
        type:String,
        default:""
    },

    channels:[

        {

            type:mongoose.Schema.Types.ObjectId,

            ref:"Channel"

        }

    ]

},

{

    timestamps:true

});

// =====================
// Export
// =====================

const User = mongoose.model("User",userSchema);

export default User;