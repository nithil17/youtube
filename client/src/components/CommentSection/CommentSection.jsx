import React from 'react'
import { useState } from 'react'
import "./CommentSection.css"

import { initialComments } from '../../utils/comments';

function CommentSection() {

    const [comments, setComments] = useState(initialComments);

    const [newComment, setNewComment] = useState("");

    const [editId, setEditId] = useState(null);

    //  function to edit comment

    const handleUpdateComment = () => {

        if (newComment.trim() === "") {
            return;
        }
        if (editId === null) {

            return;

        }

        const updatedComments = comments.map((comment) => {



            if (comment.id === editId) {

                return {

                    ...comment,

                    text: newComment

                };

            }

            return comment;

        });

        setComments(updatedComments);

        setEditId(null);

        setNewComment("");

    };

    // function to handle user added new comments

    const handleAddComment = () => {

        if (newComment.trim() === "") {
            return;
        }

        const comment = {
            id: Date.now(),
            user: "You",
            text: newComment

        }

        setComments([
            ...comments, comment
        ]);

        setNewComment("");


    }

    // functioon to delete existing comment

    const handleDeleteComment = (id) => {

        const updateComment = comments.filter((comment) => {
            return comment.id !== id;
        })

        setComments(updateComment);


    }

    return (
        //     {/*  video comments section*/}
        //   {/*  video comments input*/}

        <>
            <div className="comment-input">

                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />

                <button
                    onClick={
                        editId
                            ? handleUpdateComment
                            : handleAddComment
                    }
                >
                    {editId ? "Update" : "Comment"}
                </button>
            </div>
            {/* actual comment section implementation */}
            <div className='comments-section' >
                <h3>Comments </h3>

                {/* video edit and Delete section */}
                {
                    comments.map((comment) => {
                        return (
                            <div className='comment-card'
                                key={comment.id}>

                                <div className='comment-header'>

                                    <h4>{comment.user}</h4>

                                    {/* Comment buttons Edit and Delete */}

                                    <div className='comment-buttons'>

                                        <button
                                            onClick={() => {

                                                setEditId(comment.id);

                                                setNewComment(comment.text);

                                            }}
                                        >
                                            Edit</button>

                                        <button
                                            onClick={() => handleDeleteComment(comment.id)}
                                        >Delete</button>

                                    </div>



                                </div>

                                <p>{comment.text}</p>

                            </div>
                        )
                    })
                }
            </div>

        </>


    )
}

export default CommentSection