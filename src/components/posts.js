import * as React from "react"
import { Link, graphql } from "gatsby"
import { useState } from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/navbar"

const Posts = ({ new_posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {new_posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

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
                    <span itemProp="headline">{title}</span>
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