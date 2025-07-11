import * as React from "react"
import { Link, graphql } from "gatsby"


const Posts = ({ new_posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {new_posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const publishDate = post.frontmatter.publishDate
        const displayTitle = publishDate ? `${title} [${publishDate}]` : title

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{displayTitle}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}

export default Posts