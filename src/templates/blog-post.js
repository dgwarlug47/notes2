import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CommentsForm from "../components/comments-form"
import CommentsList from "../components/comments-list"
import commentsData from "../../comments.json"
import "../style.css" // Ensure you have the correct path to your CSS file

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const [processedHtml, setProcessedHtml] = useState(post.html)
  
  // Process HTML to highlight bracketed notes: [MYTAKE] in a soft purple and all other brackets in blue
  useEffect(() => {
    if (post.html) {
      const size = '1.08em'
      const myTakeColor = '#7a72c5'
      const otherColor = '#6e76a8'

      const highlighted = post.html.replace(/\[([^\]]+)\]/g, (match, inner) => {
        const normalized = inner.trim()
        const isMyTake = normalized.toUpperCase() === 'MYTAKE'

        return `<span style="font-size: ${size}; color: ${isMyTake ? myTakeColor : otherColor}; font-weight: 700;">${match}</span>`
      })

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
          <h1>Comments</h1>
          <CommentsList postTitle={post.frontmatter.title} comments={commentsData} />
          <h1>Add your comments</h1>
          <CommentsForm postId={post.id} postTitle={post.frontmatter.title} />
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
