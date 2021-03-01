import React from "react"
import SEO from '../components/seo'

export default () => (
    <div>
        <SEO title={"404"} description="404 Page"/>
        <div>
        <h1>
          404! Oh no! You were expecting something else weren't you?.
        </h1>
        <p>
          This probably isn't time to ask for a favor, but if you don't mind could you email me to let me know something is broken.
          <a href='mailto:devjeremyt@gmail.com?subject=Your website is broken'>Click here </a>
          to send email, easy peasy. Just shoot me some information to let me know how you landed on this page.
        </p>
      </div>
    </div>
  )