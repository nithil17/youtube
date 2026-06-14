const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken")

const loginUser = async (res, req) => {
    try {

        const { email, password } = req.body

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });

        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expriesIn: "7d"
            }

        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.name,
                email: user.email,
                role: user.role

            }
        })

    } catch (error) {
        res.status(500).json({

            message: error.message

        });
    }
}

const registerUser = async (

    req,

    res

) => {

    try {

        const {

            username,

            email,

            password

        } = req.body;

        const existingUser =

            await User.findOne({

                email

            });

        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }

        const hashedPassword =

            await bcrypt.hash(

                password,

                10

            );

        const newUser =

            new User({

                username,

                email,

                password: hashedPassword

            });

        await newUser.save();

        res.status(201).json({

            message:

                "User Registered Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    registerUser,

    loginUser

};