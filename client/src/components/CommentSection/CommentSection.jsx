
import { useState, useEffect, useContext, useCallback } from "react";
import "./CommentSection.css";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment
} from "../../services/commentService";
import { AuthContext } from "../../context/AuthContext";

function CommentSection({ videoId }) {

  const { user, isAuthenticated } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editId, setEditId] = useState(null);

  // Load comments
  const loadComments = useCallback(async () => {
    try {
      const data = await getComments(videoId);
      setComments(data);
    } catch {
      console.log("Failed to load comments");
    }
  }, [videoId]);

  // Fetch comments whenever video changes
  useEffect(() => {
    loadComments();
  }, [loadComments]);

  // Add comment
  const handleAddComment = async () => {

    if (!newComment.trim()) {
      return;
    }

    try {

      await addComment({
        videoId,
        text: newComment
      });

      setNewComment("");
      loadComments();

    } catch {

      alert("Please login to add comments.");

    }

  };

  // Update comment
  const handleUpdateComment = async () => {

    if (!newComment.trim() || !editId) {
      return;
    }

    try {

      await updateComment(editId, {
        text: newComment
      });

      setEditId(null);
      setNewComment("");
      loadComments();

    } catch {

      alert("Please login to update comments.");

    }

  };

  // Delete comment
  const handleDeleteComment = async (id) => {

    try {

      await deleteComment(id);
      loadComments();

    } catch {

      alert("Please login to delete comments.");

    }

  };

  return (

    <>

      <div className="comment-input">

        <input
          type="text"
          placeholder={
            isAuthenticated
              ? "Add a comment..."
              : "Login to add a comment"
          }
          value={newComment}
          disabled={!isAuthenticated}
          onChange={(event) =>
            setNewComment(event.target.value)
          }
        />

        <button
          disabled={!isAuthenticated}
          onClick={() => {

            if (!isAuthenticated) {
              alert("Please login to add comments.");
              return;
            }

            if (editId) {
              handleUpdateComment();
            } else {
              handleAddComment();
            }

          }}
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

              {user?.username === comment.user && (

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

              )}

            </div>

            <p>{comment.text}</p>

          </div>

        ))}

      </div>

    </>

  );

}

export default CommentSection;

