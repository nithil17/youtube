const express = require("express");

const router = express.Router();

const {

    getCommentsByVideo,

    addComment,

    updateComment,

    deleteComment

} = require("../controllers/commentController");

// GET COMMENTS FOR A VIDEO

router.get(

    "/video/:videoId",

    getCommentsByVideo

);

// ADD COMMENT

router.post(

    "/",

    addComment

);

// UPDATE COMMENT

router.put(

    "/:id",

    updateComment

);

// DELETE COMMENT

router.delete(

    "/:id",

    deleteComment

);

module.exports = router;