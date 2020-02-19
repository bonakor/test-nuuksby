import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SiteMenu from "../SiteMenu"


const Index = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <div className="logo">
          <Link to="/">
            {` `}
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <SiteMenu location={location} />
      </header>
    )}
  />
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
