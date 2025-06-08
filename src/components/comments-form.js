import React, { useState } from "react";

const CommentsForm = ({ postId, postTitle }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, you would save this to a database or API
    const newComment = {
      id: `comment-${Date.now()}`,
      name,
      comment,
      postId,
      date: new Date().toISOString(),
    };
    
    // Save to localStorage as a simple example
    const existingComments = JSON.parse(localStorage.getItem("blogComments") || "[]");
    localStorage.setItem(
      "blogComments", 
      JSON.stringify([...existingComments, newComment])
    );
    
    // Reset form and show success message
    setName("");
    setComment("");
    setSubmitted(true);
    
    // After 3 seconds, reset the submitted state
    setTimeout(() => setSubmitted(false), 3000);
    
    // Trigger a refresh of the comments list
    window.dispatchEvent(new Event("commentAdded"));
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
