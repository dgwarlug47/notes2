import * as React from "react";
import { Link, graphql } from "gatsby";

import Seo from "../components/seo";
import BlogIndex from "./index2";

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        limit: 55
        sort: [{ frontmatter: { order: ASC } }, { frontmatter: { title: ASC } }]
        filter: { frontmatter: { title: { regex: "./Music/", ne: null } } } ) {
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
