import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <div className="block block-bordered-lg pb-0">
    <div className="row">
      <div id="image-container" className="col-md-5 col-sm-6">
        <StaticQuery
          query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "blog.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 600) {
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
        <hr className="mt-0 mb-0 mx-auto hidden-md-up" />
      </div>
      <div className="col-md-7 col-sm-6 text-center d-flex flex-column justify-content-center">
        <h1 className="block-title p-t">niceb5y blog</h1>
        <p className="lead">그냥 이것저것 글을 씁니다.</p>
        <div>
          <a
            className="btn btn-lg btn-outline-primary mb-3"
            href="http://blog.niceb5y.net/"
            role="button"
          >
            이동
          </a>
        </div>
      </div>
    </div>
  </div>
)
