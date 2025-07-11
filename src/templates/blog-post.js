import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommentsForm from "../components/comments-form"
import CommentsList from "../components/comments-list"
import "../style.css" // Ensure you have the correct path to your CSS file

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post, allContentfulComments },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const [processedHtml, setProcessedHtml] = useState(post.html)
  
  // Process HTML to highlight MYTAKE
  useEffect(() => {
    if (post.html) {
      // Apply highlighting to "MYTAKE" text
      const highlighted = post.html.replace(
        /MYTAKE/g, 
        '<span style="color: #6e76a8; font-weight: bold;">MYTAKE</span>'
      )
      setProcessedHtml(highlighted)
    }
  }, [post.html])

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: processedHtml }}
          itemProp="articleBody"
        />
        <hr />
        
        {/* Comments Section */}
        <section className="blog-comments">
          <h3>Comments</h3>
          <CommentsForm postId={post.id} postTitle={post.frontmatter.title} />
          <CommentsList postTitle={post.frontmatter.title} allComments={allContentfulComments} />
        </section>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
