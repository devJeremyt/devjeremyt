import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
              site {
                  siteMetadata{
                      title
                  }
              }
          }`
    )
    return (
    <div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        `}>
        <Link to={`/`}
        css={css`
        text-decoration: none;
        flex: 3 0 auto;
      `}>
          <h3 css={css`
          display: inline
          `}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/`}
          css={css`
          flex: auto;
          `}
        >
          Home
        </Link>
        <Link
          to={`/about/`}
          css={css`
          flex: auto;
          `}
        >
          About
        </Link>
        <Link
          to={`/blogs/`}
          css={css`
          flex: auto;
          `}
        >
          Blogs
        </Link>
        <Link
          to={`posts/uses/`}
          css={css`
          flex: auto;
          `}
        >
          Uses
        </Link>
        </div>
    </div>
    
    )
}
