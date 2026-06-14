import { useState, useEffect } from "react";
import "./CommentSection.css";

import {
  getComments,
  addComment,
  updateComment,
  deleteComment
} from "../../services/commentService";

function CommentSection({ videoId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadComments();
  }, [videoId]);

  const loadComments = async () => {
    try {
      const data = await getComments(videoId);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() === "") return;

    try {
      await addComment({
        videoId,
        user: "You",
        text: newComment
      });

      setNewComment("");
      loadComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateComment = async () => {
    if (newComment.trim() === "") return;
    if (editId === null) return;

    try {
      await updateComment(editId, {
        text: newComment
      });

      setEditId(null);
      setNewComment("");
      loadComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await deleteComment(id);
      loadComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
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

      <div className="comments-section">
        <h3>Comments</h3>

        {comments.map((comment) => (
          <div
            className="comment-card"
            key={comment._id}
          >
            <div className="comment-header">
              <h4>{comment.user}</h4>

              <div className="comment-buttons">
                <button
                  onClick={() => {
                    setEditId(comment._id);
                    setNewComment(comment.text);
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDeleteComment(comment._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>

            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentSection;