import React, { useState, useEffect } from "react";

const CommentsList = ({ postTitle, comments: commentsData }) => {
  const [comments, setComments] = useState([]);

  const noCommentElement = () => {
    return (
      <div style={{
        textAlign: 'center',
        fontStyle: 'italic',
      }}>
        <p>No comments have been added to this post so far, be the first to add one comment!</p>
      </div>
    );
  };
  
  const loadComments = () => {
    // If comments data prop is provided, use it
    if (commentsData && Array.isArray(commentsData)) {
      const postData = commentsData.find(
        post => post.post_name === postTitle
      )
      if (postData && postData.comments) {
        setComments(postData.comments)
        return
      }
    }

    // Otherwise fall back to localStorage
    if (typeof window === "undefined") {
      setComments([])
      return
    }

    try {
      const savedComments = window.localStorage.getItem("blog-comments")
      if (!savedComments) {
        setComments([])
        return
      }

      const parsedComments = JSON.parse(savedComments)
      const postComments = (parsedComments || []).filter(
        comment => comment.postTitle === postTitle
      )
      setComments(postComments)
    } catch (error) {
      console.error("Error loading comments from local storage:", error)
      setComments([])
    }
  }

  useEffect(() => {
    loadComments()

    if (typeof window === "undefined") {
      return undefined
    }

    const handleCommentAdded = () => loadComments()
    window.addEventListener("commentAdded", handleCommentAdded)

    return () => {
      window.removeEventListener("commentAdded", handleCommentAdded)
    }
  }, [postTitle])


  return (
    <div className="comments-list">      
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          comment && (
            <div className="comment" key={comment.person_name + comment.Value}>
              <div className="comment-header">
                <h5 className="comment-author">{comment.person_name}</h5>
              </div>
              <div className="comment-body">
                <p>{comment.Value}</p>
              </div>
            </div>
          )
        ))
      ) : (
        noCommentElement()
      )}
    </div>
  );
};

export default CommentsList;
