import * as React from "react"
import { graphql } from "gatsby"
import { useState } from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Posts from "../components/posts"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes// :POST
  const [state, setState] = useState("All")
  var postsForDisplay = null
  if (state == "All"){
    postsForDisplay = posts.filter( post =>  post.frontmatter.types)
  }
  else if (state == "Highlights"){
    postsForDisplay = posts.filter( post =>  post.frontmatter.highlights ).sort( (a, b) => {
      return a.frontmatter.order- b.frontmatter.order
    })
  }
  else {
    postsForDisplay = posts.filter( post =>  post.frontmatter.types?.includes(state) )
  }
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <Navbar
        titles={["All", "Highlights"].concat(["Literature", "Cinema", "Painting", "Music"].sort()).concat(["Hard Sciences", "Social Sciences", "Philosophy"]).concat([, "Special", "Sports", "Urban Geography"].sort())}
        onChange={setState}
      />
      <Posts new_posts={postsForDisplay} />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: [
          { frontmatter: { publishDate: DESC } },
          { frontmatter: { title: ASC } }
        ]
        filter: { frontmatter: { title: { ne: null } } } ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          types
          publishDate
          order
          highlights
        }
      }
    }
  }
`
