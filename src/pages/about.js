import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Since I was a child I've always tinkered with everything, trying to figure out how something worked. As a young kid this usually
      meant breaking something, then struggling to figure out how to put it back together.
    </p>
    <p>
      My curiousity and constant wondering mind followed me on through college. I had a new career path or idea everyday. Pretty much
      anything I saw on TV or the internet that interested me, that's was the new thing I wanted to be. I had settled for a psychology major, but as an 
      unfocused young adult I dropped out after 2 years since I was already working full time.
    </p>
    <p>
      I always wanted to go back to college, but couldn't decide on a major. As the birth of my first child approached, I heeded the advice of my wife and started back as undeclared.
      In my second semester back I took an entry level programming class using python. Finally a passion that would provide me an endless chase to learn more.
    </p>
  </Layout>


)

export const query = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
}`