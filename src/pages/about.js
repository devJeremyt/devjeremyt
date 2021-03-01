import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title={"About"} description="About Page"/>
    <section>
          <h1>About Jeremy</h1>
          <p>
              I am a lifelong learning who believes with time and focus I can learn anything. I strive to write great code that I hope helps people directly or indirectly. I have
              a strength in invisioning the perpective of others which allows me to work easily with all co-workers. My aptitude for deductive reasoning allows me to discover deep
              hidden issues and solutions. I enjoy problem solving above all else, especially if it involves coding. Over the years I've had many roles with a wide assortment of responsibilities, but each
              one has had some level of indepth research to find the source of problems. This has forced me to learn how to deduct conclusions based on limited information.
          </p>

          <h2>Work Interests</h2>
          <p>
              <ul>
                <li>
                  Writing Code - I'm not picky when it comes to what language to write code in. Most of what I have written in recent times has been in Javascript.
                  I consider myself fullstack, but I prefer writing back-end. Writing the back-end requires to know more of the business logic, that deeper understanding of
                  how the application is going to be utilized is what I like best.
                </li>
                <li>
                  Problem Solving - I like being the go to person on a team that can find the source of a problem after everyone else has exhausted all their resources. Once
                  I have discovered the solution, I walk the team member through the steps I took to find the problem so that they learn too. 
                </li>
                <li>
                  Working in a small tightknit team - Working in a large team or alone is ok too, but small teams have more to offer. In a large team there isn't the same group
                  unity as with smaller teams. The conversations between members tend to be spread out, so there isn't the same level of depth between each member. I do really
                  like to work alone as well, I tend to get much more done that way, and honestly a good balance between working with the team and alone I believe yields the 
                  best results.
                </li>
                <li>
                  Inspiring cohesion - Not everyone gets along all the time, however, I'm pretty easy going and mesh well with most people. This helps me mediate in times where
                  two others may be out of sync and disagree too strongly to find a middle ground on their own. After knowing people a while, there is foresight into what may
                  cause confrontation which allows me inspire cohesion before a problem arises. 
                </li>
              </ul>
          </p>
        </section>
  </Layout>


)