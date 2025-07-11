import * as React from "react"
import { Link, graphql } from "gatsby"
import { useState } from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Posts from "../components/posts"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes// :POST
  const [state, setState] = useState("Literature")
  const new_posts = posts.filter( post =>  post.frontmatter.types?.includes(state) )
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
        titles={["Literature", "Cinema", "Painting", "Music"].sort().concat(["Hard Sciences", "Social Sciences", "Philosophy"]).concat([, "Special", "Sports", "Urban Geography"].sort())}
        onChange={setState}
      />
      <Posts new_posts={new_posts} />
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
        sort: [{  frontmatter: { title: ASC } }]
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
        }
      }
    }
  }
`
