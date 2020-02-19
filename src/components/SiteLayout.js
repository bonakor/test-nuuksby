import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
import "./style.css"

const SiteLayout = ({ children, location }) => (
  <div>
    <Header location={location} />
    <div>{children}</div>
    <footer>
      © {new Date().getFullYear()} | Built with
      {` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
