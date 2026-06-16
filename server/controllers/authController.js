// =====================
// Imports
// =====================

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

// =====================
// Register User
// =====================

const registerUser = async (req,res)=>{

    try{

        const {

            username,
            email,
            password

        } = req.body;

        if(!username || !email || !password){

            return res.status(400).json({

                message:"All fields are required"

            });

        }

        const existingUser = await User.findOne({

            email

        });

        if(existingUser){

            return res.status(400).json({

                message:"User already exists"

            });

        }

        const hashedPassword = await bcrypt.hash(

            password,

            10

        );

        const user = await User.create({

            username,

            email,

            password:hashedPassword

        });

        res.status(201).json({

            message:"Registration Successful",

            user:{

                id:user._id,

                username:user.username,

                email:user.email

            }

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

// =====================
// Login User
// =====================

const loginUser = async (req,res)=>{

    try{

        const {

            email,

            password

        } = req.body;

        const user = await User.findOne({

            email

        });

        if(!user){

            return res.status(400).json({

                message:"Invalid Credentials"

            });

        }

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if(!isMatch){

            return res.status(400).json({

                message:"Invalid Credentials"

            });

        }

        const token = jwt.sign(

            {

                id:user._id,

                role:user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn:"7d"

            }

        );

        res.status(200).json({

            token,

            user:{

                id:user._id,

                username:user.username,

                email:user.email,

                role:user.role

            }

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

// =====================
// Reset Password
// =====================

const resetPassword = async (req,res)=>{

    try{

        const {

            email,

            password

        } = req.body;

        const user = await User.findOne({

            email

        });

        if(!user){

            return res.status(404).json({

                message:"User not found"

            });

        }

        const hashedPassword = await bcrypt.hash(

            password,

            10

        );

        user.password = hashedPassword;

        await user.save();

        res.status(200).json({

            message:"Password Updated"

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

// =====================
// Exports
// =====================

export {

    registerUser,

    loginUser,

    resetPassword

};