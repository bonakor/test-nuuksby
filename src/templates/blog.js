import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import PostEntry from "../components/PostEntry"
import HomepageLayout from "../components/HomepageLayout"
import Seo from "../components/Seo"

class IndexPage extends Component {
  renderPreviousLink = () => {
    const {
      pageContext: { pageNumber },
    } = this.props

    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/`
    } else if (1 < pageNumber) {
      previousLink = `/page/${pageNumber - 1}`
    }

    return (
      <button type="primary" onClick={() => navigate(previousLink)}>
        Previous Posts
      </button>
    )
  }

  renderNextLink = () => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = this.props

    if (hasNextPage) {
      return (
        <button
          type="primary"
          onClick={() => navigate(`/page/${pageNumber + 1}`)}
        >
          Next Posts
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      data,
      location,
      pageContext: { pageNumber },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    return (
      <HomepageLayout pageNumber={pageNumber} location={{ location }}>
        <Seo title={`Blog${blogPageNumber}`} />
        {data &&
          data.wpgraphql &&
          data.wpgraphql.posts.nodes.map(post => (
            <div key={post.id}>
              <PostEntry post={post} />
            </div>
          ))}
        <RecentPostsWidget />
        <CategoriesWidget />
        <RecentCommentsWidget />
        {this.renderPreviousLink()}

        {this.renderNextLink()}
      </HomepageLayout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`
