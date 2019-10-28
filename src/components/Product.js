import PropTypes from "prop-types"
import React from "react"

const Product = ({ content }) => (
  <div
    style={{
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
        {content.component.data.name}
      </h1>
      <h2 style={{ margin: 0 }}>
        ${content.component.data.price}
      </h2>
      <p style={{ margin: 0 }}>
        {content.component.data.description}
      </p>
    </div>
  </div>
)

Product.propTypes = {
  siteTitle: PropTypes.string,
}

Product.defaultProps = {
  siteTitle: ``,
}

export default Product
