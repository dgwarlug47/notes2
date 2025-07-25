import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import grandpaPic from "../images/grandpa.jpg" 


const StartingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      
      {/* Picture */}
      <img 
        src={grandpaPic}
        alt="Blog header image"
        style={{ 
          width: '100%', 
          height: '300px', 
          objectFit: 'cover', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}
      />

      {/* Description */}
      <div style={{ 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>The Roots of My Curiosity</h2>
        <p style={{ lineHeight: '1.6' }}>
          My profound love for knowledge finds roots in my grandfather on my mother's side, 
          Ananias de Farias Cavalcanti, born in Riacho do Meio, Paraíba, Brazil, on July 24th, 1931. 
        </p>
        <p style={{ lineHeight: '1.6' }}> 
          He was a man of methodical habits who would spend two hours getting ready each morning to go to work, 
          and whenever he was home, you'd find him with a book in his hands. His personal library 
          was a treasure trove: the Bible, World War II books, works by Erico Verissimo, 
          Edgar Allan Poe, Dostoevsky, and much more. 
        </p>
        <p style={{ lineHeight: '1.6', marginTop: '15px' }}>
          While many people collect books as decoration, he was among the rare few who truly 
          read them. What always fascinated me was his pursuit of knowledge for its own sake—
          he would study subjects that offered no practical benefit. This was remarkable for a man who never had the privilege of a college education,
          yet possessed the soul of a true scholar.
        </p>
        <p style={{ lineHeight: '1.6', marginTop: '15px' }}>
          Unfortunately, he passed away when I was only four years old, and I have never since 
          met someone who shared such profound curiosity. Though our time together was brief, 
          his intellectual legacy lives on in me. This blog is my way of honoring that inherited 
          curiosity and methodical pursuit of knowledge that he embodied so completely.
        </p>
      </div>

      {/* Manual */}
      <div style={{ 
      }}>
        <h3>📚 How to Navigate This Blog</h3>
        <p><strong>Step 1:</strong> Browse through the nav bar to explore different categories, see the highlights and all posts ordered by publish date</p>
        <p><strong>Step 2:</strong> Most posts are a mix of personal reflections on the topic and curated summaries. Personal reflections can be found in each blog post by searching the tag [MYTAKE]</p>
        <p><strong>Step 3:</strong> <strong>IMPORTANT -</strong> In the end of each post there is a section to add comments, if you like any post please add your comment</p>
      </div>

      {/* Link to blog list */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <Link 
          to="/blog-list" 
          style={{ 
            backgroundColor: '#0066cc', 
            color: 'white', 
            padding: '10px 20px', 
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          View All Posts
        </Link>
      </div>
    </Layout>
  )
}

export default StartingPage

export const Head = () => <Seo title="Home" />

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