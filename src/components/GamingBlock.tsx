import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <div className="block block-bordered-lg">
    <div className="text-center">
      <h1 className="block-title mb-4">Gaming</h1>
      <p className="lead">#PS4 #ミリシタ</p>
      <div className="d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <a href="https://psnprofiles.com/ShKim_niceb5y">
            <img
              src="https://card.psnprofiles.com/2/ShKim_niceb5y.png"
              className="py-3 w-100"
            />
          </a>
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "mltd.png" }) {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img
                imgStyle={{ width: "100%" }}
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            )}
          />
        </div>
      </div>
    </div>
  </div>
)
