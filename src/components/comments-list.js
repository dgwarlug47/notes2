import React, { useState, useEffect } from "react";

import { useStaticQuery, graphql } from "gatsby"


const CommentsList = ({ postTitle }) => {
  const [comments, setComments] = useState([]);

const data = useStaticQuery(graphql`
  query {
    allContentfulComments {
      nodes {
        commentsJson {
          post_name
          comments {
            person_name
            Value
          }
        }
      }
    }
  }
`);

  // Intent: set the react state comments to be equal to 
            // [{
            //     "person_name": "Daniel",
            //     "Value": "very good"
            // }]
  
  const getCommentsFromNode = (nodeCommentsJson, postTitle) => {
    return nodeCommentsJson
      .filter(
        (commentJson) => commentJson.post_name === postTitle
      )
      .map((commentJson) => commentJson.comments)[0];
  }; 
  
  const loadComments = () => {
    const allComments = data;
    // Filter comments for this specific post
    var postComments = null;
    try {
      postComments = getCommentsFromNode(
        allComments.allContentfulComments.nodes[0].commentsJson,
        postTitle
      );

    } catch (error) {
      console.error("Error loading comments from first node:", error);
      
      // Only run this if the first command failed
      try {
        postComments = getCommentsFromNode(
          allComments.allContentfulComments.nodes[1].commentsJson,
          postTitle
        );
      } catch (secondError) {
        console.error("Error loading comments from second node:", secondError);
      }
    }

    setComments(postComments);
  };

  useEffect(() => {
    loadComments();
    
    // Listen for new comments
    window.addEventListener("commentAdded", loadComments);
    
    return () => {
      window.removeEventListener("commentAdded", loadComments);
    };
  });


  return (
    <div className="comments-list">      
      {comments && comments.map(
        (comment) => (
          comment && (
            <div className="comment">
              <div className="comment-header">
                <h5 className="comment-author">{comment.person_name}</h5>
              </div>
              <div className="comment-body">
                <p>{comment.Value}</p>
              </div>
            </div>
          )
      ))}
    </div>
  );
};

export default CommentsList;
