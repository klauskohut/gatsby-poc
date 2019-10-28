import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query Routes {
        allSitePage {
          edges {
            node {
              path
              context {
                page {
                  contents {
                    component {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {
          data.allSitePage.edges.map(({ node }) =>
            <li key={node.path}>
              <Link to={node.path}>
                {node.path}
              </Link>
            </li>
          )
        }
      </ul>
    )}
  />
)
