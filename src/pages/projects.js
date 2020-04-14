import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Project from '../components/project'
import { css } from "@emotion/core"

export default ({data}) => {
    return (
        <Layout>
            <div css={css`
            display:flex;
            justify-content: space-between;
        `}>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} css={css`
                    width: 48%
                `}>
                   <Project project={node}></Project>
                </div>
            ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {in: "projects"}}}) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                technologies
              }
            }
          }
        }
    }`