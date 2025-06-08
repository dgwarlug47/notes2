import React, { useState, useEffect } from "react";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const loadComments = () => {
    // In a real implementation, you would fetch from a database or API
    const allComments = JSON.parse(localStorage.getItem("blogComments") || "[]");
    // Filter comments for this specific post
    const postComments = allComments.filter(comment => comment.postId === postId);
    setComments(postComments);
  };

  useEffect(() => {
    loadComments();
    
    // Listen for new comments
    window.addEventListener("commentAdded", loadComments);
    
    return () => {
      window.removeEventListener("commentAdded", loadComments);
    };
  }, [postId]);

  if (comments.length === 0) {
    return <p className="no-comments">Be the first to comment!</p>;
  }

  return (
    <div className="comments-list">
      <h4>{comments.length} Comment{comments.length !== 1 ? "s" : ""}</h4>
      
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment-header">
            <h5 className="comment-author">{comment.name}</h5>
            <span className="comment-date">
              {new Date(comment.date).toLocaleDateString()}
            </span>
          </div>
          <div className="comment-body">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
