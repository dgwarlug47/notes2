import * as React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/seo";
import BlogIndex from "./index2";

export const pageQuery = graphql`
  {
    allMarkdownRemark(
        limit: 55
        sort: [{ frontmatter: { order: ASC } }, { frontmatter: { title: ASC } }]
        filter: { frontmatter: { title: { regex: "./Cinema/", ne: null } } } ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;



export default BlogIndex;
