import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../../utils"

const MENU_QUERY = graphql`
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: MENU_1 }) {
        nodes {
          ...MenuFields
          childItems {
            nodes {
              ...MenuFields
              childItems {
                nodes {
                  ...MenuFields
                  childItems {
                    nodes {
                      ...MenuFields
                      childItems {
                        nodes {
                          ...MenuFields
                          childItems {
                            nodes {
                              ...MenuFields
                              childItems {
                                nodes {
                                  ...MenuFields
                                  childItems {
                                    nodes {
                                      ...MenuFields
                                      childItems {
                                        nodes {
                                          ...MenuFields
                                          childItems {
                                            nodes {
                                              ...MenuFields
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const renderMenuItem = menuItem => {
  const link = createLocalLink(menuItem.url)
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem)
  } else {
    return (
      <div key={menuItem.id}>
        {link ? (
          <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
        ) : (
          menuItem.label
        )}
      </div>
    )
  }
}

const renderSubMenu = menuItem => (
  <div title={menuItem.label}>
    <div title={menuItem.label}>
      {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
    </div>
  </div>
)

const SiteMenu = ({ location }) => (
  <StaticQuery
    query={MENU_QUERY}
    render={data => {
      if (data.wpgraphql.menuItems) {
        return (
          <div
            defaultSelectedKeys={[location.pathname ? location.pathname : `1`]}
          >
            {data.wpgraphql.menuItems.nodes.map(menuItem => {
              if (menuItem.childItems.nodes.length) {
                return renderSubMenu(menuItem)
              } else {
                return renderMenuItem(menuItem)
              }
            })}
          </div>
        )
      } else {
        return null
      }
    }}
  />
)

export default SiteMenu
