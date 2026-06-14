const Comment = require("../models/Comment");

// GET COMMENTS BY VIDEO

const getCommentsByVideo = async (req, res) => {

    try {

        const comments = await Comment.find({

            videoId: req.params.videoId

        });

        res.status(200).json(comments);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ADD COMMENT

const addComment = async (req, res) => {

    try {

        const comment = new Comment(req.body);

        const savedComment = await comment.save();

        res.status(201).json(savedComment);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// UPDATE COMMENT

const updateComment = async (req, res) => {

    try {

        const updatedComment = await Comment.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true

            }

        );

        res.status(200).json(updatedComment);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// DELETE COMMENT

const deleteComment = async (req, res) => {

    try {

        await Comment.findByIdAndDelete(

            req.params.id

        );

        res.status(200).json({

            message: "Comment deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

module.exports = {

    getCommentsByVideo,

    addComment,

    updateComment,

    deleteComment

};