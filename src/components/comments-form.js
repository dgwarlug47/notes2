import React, { useState } from "react";

import sendEmail from "./sendEmail"; // Adjust the import path as necessary

const CommentsForm = ({ postId, postTitle }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail("name: " + name + ", comment: " + comment);
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="comment-form-container">
      <h4>Leave a comment</h4>
      
      {submitted ? (
        <div className="comment-success">
          Thank you for your comment! It will appear shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="comment-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div style={{ marginTop: "8px" }}></div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <div style={{ marginTop: "8px" }}></div>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows="4"
              className="form-control"
            />
          </div>
          
          <button type="submit" className="submit-comment-btn">
            Submit Comment
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentsForm;
