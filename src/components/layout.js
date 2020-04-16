import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Header from '../components/header'

export default ({ children }) => {
  return (
  <div
    css={css`
      margin: 0 auto;
      max-width: 800px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Header/>
    {children}
  </div>
)
}