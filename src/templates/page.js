import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import Seo from "../components/Seo"
import contentParser from "gatsby-wpgraphql-inline-images"

const Page = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
    pageContext: {
      pluginOptions: { wordPressUrl, uploadsUrl },
    },
  } = props
  const { title, content } = page
  return (
    <SiteLayout location={location}>
      <Seo title={`${page.title}`} />

      <h1>{title}</h1>

      <div>{contentParser({ content }, { wordPressUrl, uploadsUrl })}</div>
<h3>{page.pageFields.adresse}</h3>
      <RecentPostsWidget />
      <CategoriesWidget />
      <RecentCommentsWidget />
    </SiteLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
        pageFields {
          adresse
        }
      }
    }
  }
`
