import React from 'react'
import {Link, useStaticQuery} from "gatsby"
import { css } from "@emotion/core"
import Img from 'gatsby-image'
import "./main.css"
import Toggle from '../components/toggle'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "images/headshot.jpg"}) {
        id
        childImageSharp{
          fluid{
                        ...GatsbyImageSharpFluid
          }
        }
      }
    }`

  )
    return (
    <div>
        <div css={css`
            padding: 45px 0;
        `}>
          <Img css={css`
          width: 250px;
          border-radius: 115px;
          display:in-line;
        `} fluid={data.file.childImageSharp.fluid} alt='Placeholder'></Img>
          <Toggle />
          <Link to={`/`}
            css={css`
              text-decoration: none;
              display: inline;
              `}>
                 
            <h1 css={css`
                font-size: 6.5rem;
                display: inline;
                text-decoration: none;
                padding-bottom: 3rem;
              `}>
              Jeremy Trimble
            </h1>
          </Link>
        </div>
      
        <div
          css={css`
            padding: 0px 50px;
            display:flex;
          `}
        >
        <Link
          to={`/about/`}
          css={css`
          flex: auto;
          `}
          className='nav-link'
        >
          About
        </Link>
        <Link
          to={`/blogs/`}
          css={css`
          flex: auto;
          `}
          className='nav-link'
        >
          Blogs
        </Link>
        <Link
          to={`/projects/`}
          css={css`
          flex: auto;
          `}
          className='nav-link'
        >
          Projects
        </Link>
        <Link
          to={`/Resume/`}
          css={css`
          flex: auto;
          `}
          className='nav-link'
        >
          Resume
        </Link>
        </div>
    </div>   
    )
}