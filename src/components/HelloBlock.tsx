import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <div className="block">
    <div className="text-center">
      <h1 className="block-title mb-1">HELLO</h1>
      <p className="lead pb-5">안녕하세요.</p>
      <div className="pt-5">
        <StaticQuery
          query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                  fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          `}
          render={data => (
            <Img
              fixed={data.placeholderImage.childImageSharp.fixed}
              imgStyle={{ borderRadius: "50%" }}
            />
          )}
        />
        <p className="mt-3">과제에 고통받는 컴퓨터학부생 (화석)</p>
      </div>
    </div>
  </div>
)
