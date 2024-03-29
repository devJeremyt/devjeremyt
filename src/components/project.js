import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import { css } from "@emotion/core"

export default ({project}) => {
    return (
        <div css={css`
                max-Width:300px;
        `}>
            <Link to={project.fields.slug}>
                <h3>{project.frontmatter.title}{" "}
                <span css={css`
                    font-size: 1rem;
                `}>
                    - Built with {project.frontmatter.technologies}
                </span>
                </h3>
                <Img fluid={project.frontmatter.image.childImageSharp.fluid} alt='Placeholder'></Img>
            </Link>
        </div>
    )
}

