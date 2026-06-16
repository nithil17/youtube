import { useState, useEffect, useContext } from "react";
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

  // Load comments whenever video changes

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

  // Add new comment

  const handleAddComment = async () => {

    if (!newComment.trim()) return;

    try {

      await addComment({
        videoId,
        text: newComment
      });

      setNewComment("");

      loadComments();

    } catch (error) {

      console.log(error);

    }

  };

  // Update existing comment

  const handleUpdateComment = async () => {

    if (!newComment.trim() || !editId) return;

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

  // Delete selected comment

  const handleDeleteComment = async (id) => {

    try {

      await deleteComment(id);

      loadComments();

    } catch (error) {
      alert("Please login to add comments.");
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
          onChange={(event) => setNewComment(event.target.value)}
        />

        <button
          disabled={!isAuthenticated}
          onClick={() => {
            if (!isAuthenticated) {
              alert("Please login to add comments.");
              return;
            }
            editId
              ? handleUpdateComment()
              : handleAddComment();
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

              {/* Only owner can edit/delete */}

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