import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({data})=>{
    return(
        <Layout>
          <SEO title={"Blogs"} description="Blogs Page"/>
          <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}
                        css={css`
                        text-decoration: none:
                        color: inherit;
                        `}
                    >
                    <h3>
                    {node.frontmatter.title}{" "}
                    <span
                        css={css`
                        color: #bbb;
                        `}
                    >
                    — {node.frontmatter.date}
                    </span>
                    </h3>
                    <p>{node.excerpt}</p>
                    </Link>
                </div>
            ))}
          </div> 
       </Layout>
    )
}

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {category: {in: "posts"}}},sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}`