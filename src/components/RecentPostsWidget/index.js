import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"


const QUERY = graphql`
  {
    wpgraphql {
      posts(first: 5) {
        nodes {
          id
          title
          uri
        }
      }
    }
  }
`

const RecentPostsWidget = () => (
  <StaticQuery
    query={QUERY}
    render={data => {
      return (
        <div>
          <h2>Recent Posts</h2>
          <ul>
            {data.wpgraphql.posts.nodes.map(post => {
              return (
                <li>
                  <Link to={`/blog/${post.uri}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }}
  />
)

export default RecentPostsWidget
