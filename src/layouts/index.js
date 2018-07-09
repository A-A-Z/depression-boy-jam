import React from 'react'
import PropTypes from 'prop-types'

import '../assets/styles/app.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <div>{children()}</div>
    <footer>Footer Info bar</footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
