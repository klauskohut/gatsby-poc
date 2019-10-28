import { Link } from "gatsby"
import React from "react"

const Footer = ({ content }) => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Back to /
        </Link>
      </h1>
      <p style={{
        color: `white`,
        textDecoration: `none`,
      }}>{content.component.data.text}</p>
    </div>
  </footer>
)

export default Footer
