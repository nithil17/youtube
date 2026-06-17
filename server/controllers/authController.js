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

        const normalizedUsername = username?.trim();
        const normalizedEmail = email?.trim().toLowerCase();

        if(!normalizedUsername || !normalizedEmail || !password){

            return res.status(400).json({

                message:"All fields are required"

            });

        }

        if(normalizedUsername.length < 3 || normalizedUsername.length > 30){
            return res.status(400).json({
                message:"Username must be 3 to 30 characters"
            });
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)){
            return res.status(400).json({
                message:"Enter a valid email"
            });
        }

        if(password.length < 6){
            return res.status(400).json({
                message:"Password must be at least 6 characters"
            });
        }

        const existingUser = await User.findOne({

            email: normalizedEmail

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

            username: normalizedUsername,

            email: normalizedEmail,

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

        if(!email || !password){
            return res.status(400).json({
                message:"Email and password are required"
            });
        }

        const user = await User.findOne({

            email: email.trim().toLowerCase()

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

                username:user.username,

                email:user.email,

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

        if(!email || !password){
            return res.status(400).json({
                message:"Email and new password are required"
            });
        }

        if(password.length < 6){
            return res.status(400).json({
                message:"Password must be at least 6 characters"
            });
        }

        const user = await User.findOne({

            email: email.trim().toLowerCase()

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
