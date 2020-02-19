import React from "react"
import SiteHeader from "../../components/SiteHeader"
import HomeElements from "../../components/HomeElements"

const HomepageLayout = ({ pageNumber, location, children }) => (
  <>
    <div>
      <SiteHeader location={location} />
      <p>Bienvenue sur la home</p>
      <HomeElements />
      <div>{children}</div>
    </div>
  </>
)

export default HomepageLayout
