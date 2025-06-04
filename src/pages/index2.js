import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  // Add containerStyle for mobile friendliness
  const containerStyle = {
    padding: "0 16px",
    maxWidth: "100%",
    boxSizing: "border-box",
    margin: "0 auto",
    '@media (min-width: 768px)': {
      maxWidth: "90%"
    },
    '@media (min-width: 1024px)': {
      maxWidth: "1000px"
    }
  };

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
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <div style={containerStyle}>
        <ol style={{ listStyle: `none`, padding: 0, margin: 0 }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  style={{ marginBottom: "2rem", padding: "1rem 0" }}
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 style={{ fontSize: "clamp(1.2rem, 5vw, 1.5rem)", lineHeight: 1.3 }}>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
